import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { parse } from 'date-fns'

import getWindDirection from '../helpers/getWindDirection'
import moonPhase from '../helpers/theme/moonPhase'

export const useWeatherForecast = () => {

  const API_KEY = '092c6958a22f428e808132103242508'
  const URL_API = `http://api.weatherapi.com/v1/marine.json?key=${API_KEY}`

  const currentDay = new Date().toISOString().split('T')[0]
  const paramsMarine = {
    // latitude,
    // longitude,
    current: [
      'wave_height', 'wave_direction', 'wave_period', 'wind_wave_height', 'wind_wave_direction',
      'wind_wave_period', 'wind_wave_peak_period', 'swell_wave_height', 'swell_wave_direction',
      'swell_wave_period', 'swell_wave_peak_period', 'ocean_current_velocity', 'ocean_current_direction'
    ],
    hourly: [
      'wave_height', 'wave_direction', 'wave_period', 'wind_wave_height', 'wind_wave_direction',
      'wind_wave_period', 'wind_wave_peak_period', 'swell_wave_height', 'swell_wave_direction',
      'swell_wave_period', 'swell_wave_peak_period', 'ocean_current_velocity', 'ocean_current_direction'
    ],
    daily: [
      'wave_height_max', 'wave_direction_dominant', 'wave_period_max', 'wind_wave_height_max',
      'wind_wave_direction_dominant', 'wind_wave_period_max', 'wind_wave_peak_period_max',
      'swell_wave_height_max', 'swell_wave_direction_dominant', 'swell_wave_period_max',
      'swell_wave_peak_period_max'
    ],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    // 'forecast_days': 1,
    // 'start_date': format(startDate, 'yyyy-MM-dd'),
    // 'end_date': format(endDate, 'yyyy-MM-dd'),
  }

  const paramsForecast = {
    'current': ['temperature_2m', 'is_day'],
    'hourly': ['temperature_2m', 'apparent_temperature', 'weather_code', 'soil_temperature_6cm',
      'uv_index', 'is_day', 'cape', 'sunshine_duration', 'wind_gusts_10m', 'wind_speed_10m', 'relative_humidity_2m', 'wind_direction_10m',
    ],
    'daily': ['sunrise', 'sunset', 'uv_index_max'],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }


  const getWeatherForecast = useMutation({
    mutationFn: async ({ latitude, longitude, date = currentDay }) => {
      if (!latitude || !longitude) {
        return
      }
      const newParamsMarine = { ...paramsMarine, latitude, longitude, start_date: date, end_date: date }
      const newParamsForecast = { ...paramsForecast, latitude, longitude, start_date: date, end_date: date }

      // const { data } = await axios.get(`${URL_API}&q=${latitude},${longitude}&dt=${date}`)

      const timeZone = new Date().getTimezoneOffset() / 60

      const URL_API_OPEN = 'https://marine-api.open-meteo.com/v1/marine'
      const URL_API_OPEN_FORECAST = 'https://api.open-meteo.com/v1/forecast'
      const URL_API_OPEN_ASTRONOMY = 'https://aa.usno.navy.mil/api/rstt/oneday'
      const URL_API_PHASE_MOON = 'https://aa.usno.navy.mil/api/moon/phases/year'

      const results = await Promise.all([
        axios.get(`${URL_API_OPEN}?${new URLSearchParams(newParamsMarine).toString()}`),
        axios.get(`${URL_API_OPEN_FORECAST}?${new URLSearchParams(newParamsForecast).toString()}`),
        axios.get(`${URL_API_OPEN_ASTRONOMY}?date=${date}&coords=${latitude},${longitude}&dst=true&tz=${-timeZone}&body=moon`),
        axios.get(`${URL_API_PHASE_MOON}?year=${new Date(date).getFullYear()}`),
      ])

      const [dataM, dataForecast, dataAstronomy, dataMoonAnnual] = results

      const moonPhaseAnnual = dataMoonAnnual?.data?.phasedata.map((phase) => ({
        ...phase,
        date: parse(`${phase.day}-${phase.month}-${phase.year}`, 'd-M-yyyy', new Date()),
        phase: phase.phase,
      })).reduce((acc, phase) => {
        const month = phase.date.getMonth() + 1
        if (!acc[month]) {
          acc[month] = []
        }
        acc[month].push(phase)
        return acc
      }, {})


      const moonData = dataAstronomy.data.properties.data

      const convertedData = moonData.moondata.reduce((acc, event) => {
        if (event.phen === 'Rise') {
          acc.moonrise = event.time.split(' ')[0]
        }
        if (event.phen === 'Set') {
          acc.moonset = event.time.split(' ')[0]
        }
        return acc
      }, {})


      const moonCurrentDate = {
        illumination: moonData.fracillum,
        currentMoonPhase: moonPhase(moonData.fracillum),
        nextPhase: {
          phase: moonData.closestphase.phase,
          day: moonData.closestphase.day
        },
        ...convertedData
      }

      const hourly = dataM.data.hourly
      const hourlyForecast = dataForecast.data.hourly

      const dailyForecast = dataForecast.data.daily

      const newWeatherForecast = {
        location: {
          latitude: latitude,
          longitude: longitude,
          timezone: dataM?.timezone,
        },
        astro: {
          sunrise: dailyForecast.sunrise[0].split('T')[1],
          sunset: dailyForecast.sunset[0].split('T')[1],
          ...moonCurrentDate,
          fullMoon: moonPhaseAnnual[moonData.closestphase.month].find((phase) => phase.phase === 'Full Moon'),
        },
        hourly: Array.from({ length: hourly?.time.length }, (_, index) => ({
          // ...dataM?.hour[index],
          code: hourlyForecast.weather_code[index],
          time: hourly?.time[index], // hora
          waterTemperature: hourlyForecast?.soil_temperature_6cm[index], // temperatura del agua
          feelsLike: hourlyForecast.apparent_temperature[index], // sensación térmica 
          // gustKph: newData?.hour[index]?.gust_kph, // ráfagas de viento en km/h
          isDay: hourlyForecast.is_day[index] === 1 ? 'day' : 'night', // día o noche
          temperatureC: hourlyForecast?.temperature_2m[index], // temperatura en °C
          uv: Math.round(hourlyForecast?.uv_index[index]), // índice UV 
          windDirection: getWindDirection(hourlyForecast?.wind_direction_10m[index]), // dirección del viento
          windKph: hourlyForecast.wind_speed_10m[index], // velocidad del viento en km/h
          waveHeight: hourly.swell_wave_height[index], // altura de la ola en metros
          waveDirection: getWindDirection(hourly.swell_wave_direction[index]), // dirección de la ola
          waveDirectionDegrees: hourly.swell_wave_direction[index], // dirección de la ola en grados
          wavePeriod: hourly.wave_period[index], // período de la ola en segundos
          humidity: hourlyForecast?.relative_humidity_2m[index], // humedad
        })),
      }
      return newWeatherForecast
    },
  })

  return getWeatherForecast

}
