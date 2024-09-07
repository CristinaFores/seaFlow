import { format } from 'date-fns'
import { useEffect } from 'react'

import WeatherInfoCircle from '../components/common/WeatherInfoCircle'
import DayPicker from '../components/ui/DayPicker'
import TimeSlider from '../components/ui/TimeSlider'
import TitleLocation from '../components/ui/TitleLocation'
import { useWeatherForecast } from '../hooks/useWeatherForecast'
import useStoreUser from '../store/useStoreUser'

function WeatherHomePage() {
  const { user, setUserDate, setUserTime } = useStoreUser()
  const { date, time } = user

  const {
    mutate: getWeatherForecast,
    data: newWeatherForecast,
    isPending: isWeatherForecastPending,
  } = useWeatherForecast()

  const currentWeather = newWeatherForecast?.hourly?.find((current) => {
    const hourUnix = new Date(current.time).getHours() * 60
    return hourUnix <= user.time && user.time < hourUnix + 60
  }) ?? {}

  useEffect(() => {
    if (user?.locationSelected !== null) {
      getWeatherForecast({
        latitude: user?.locationSelected?.latitude,
        longitude: user?.locationSelected?.longitude,
        date: format(new Date(user.date), 'yyyy-MM-dd'),
      })
    }
  }, [user?.locationSelected, user.date, getWeatherForecast])

  return (
    <div className="weather-home-page">
      <h1 className="weather-home-page__title">Marine Weather Forecast</h1>
      <TitleLocation />
      <section className="weather-home-page__time-controls">
        <WeatherInfoCircle
          currentWeather={currentWeather}
          astroData={newWeatherForecast?.astro}
          userTime={time}
          isPending={isWeatherForecastPending}
        />
        <TimeSlider
          time={time}
          setTime={setUserTime}
        />
        <DayPicker
          selectedDate={date} setSelectedDate={setUserDate}
        />
      </section>
    </div>
  )
}


export default WeatherHomePage


