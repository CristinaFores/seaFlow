import { format } from 'date-fns'
import { Tooltip } from 'react-tooltip'

import {
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  SeaWaveIcon,
  PersonIcon,
  ArrowIcon,
  HumidityIcon,
  WaveThermometerIcon,
  WindIcon,
  BarometerIcon,
} from '../../assets/Icons'
import { fillColorsDefault, gradientColorsDefault } from '../../helpers/theme/colors'
import conditionsIcons from '../../helpers/theme/conditionsIcons'
import indexUV from '../../helpers/theme/indexUV'
import Spinner from '../ui/Spinner'


const TooltipCustom = ({ children, place = top, ...props }) => {
  return (
    <Tooltip
      place={place}
      style={{
        background: 'white',
        color: 'black',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px 1px',
        fontSize: '14px',
        zIndex: 9999,
      }}
      opacity={1}
      {...props}

    >
      {children}
    </Tooltip>
  )
}

const tooltipsWeather = [
  { anchorSelect: '.weather-circle__condition', text: 'Condiciones meteorológicas' },
  { anchorSelect: '.weather-circle__temperature', text: 'Temperatura' },
  { anchorSelect: '.weather-circle__feels-like', text: 'Sensación térmica' },
  { anchorSelect: '.weather-circle__humidity', text: 'Humedad' },
  { anchorSelect: '.weather-circle__wind', text: 'Velocidad del viento' },
  { anchorSelect: '.weather-circle__wind-direction', text: 'Dirección del viento' },
  { anchorSelect: '.weather-circle__uv', text: 'Índice UV' },
  { anchorSelect: '.weather-circle__wave-height', text: 'Altura de la ola' },
  { anchorSelect: '.weather-circle__wave-period', text: 'Periodo de la ola' },
  { anchorSelect: '.weather-circle__wave-direction', text: 'Dirección de la ola' },
  { anchorSelect: '.weather-circle__water-temperature', text: 'Temperatura del agua' },
  { anchorSelect: '.weather-circle__sunrise', text: 'Salida del sol' },
  { anchorSelect: '.weather-circle__sunset', text: 'Puesta del sol' },
]
const WeatherDetails = ({ currentWeather, userTime }) => {
  return (
    <>
      {tooltipsWeather.map(({ anchorSelect, text }) => (
        <TooltipCustom key={anchorSelect} place="top" anchorSelect={anchorSelect}>
          <span>{text}</span>
        </TooltipCustom>
      ))}
      <a className="weather-circle__condition">
        {conditionsIcons[currentWeather?.code]?.[currentWeather?.isDay]}
      </a>
      <a id="weather-circle__temperature" className="weather-circle__temperature">
        <p>{currentWeather?.temperatureC?.toFixed()}°</p>
        <ThermometerIcon />
      </ a>
      <li className="weather-circle__feels-like">
        <p>{currentWeather?.feelsLike?.toFixed()}°</p>
        <PersonIcon />
      </li>
      <li className="weather-circle__humidity">
        <HumidityIcon percentage={currentWeather?.humidity} width={15} height={20} />
        <p>{currentWeather?.humidity}%</p>
      </li>
      <li className="weather-circle__wind">
        <WindIcon />
        <p>{currentWeather?.windKph} km/h</p>
      </li>
      <li className="weather-circle__wind-direction">
        <ArrowIcon angle={currentWeather?.windDirection} width={18} height={18} />
        <p>{currentWeather?.windDirection}</p>
      </li>
      <li className="weather-circle__uv">
        <div style={{ background: indexUV[currentWeather?.uv]?.color }}></div>
        <p>{currentWeather?.uv}</p>
      </li>
      <h5 className="weather-circle__time">
        {format(new Date(0, 0, 0, Math.floor(userTime / 60), userTime % 60), 'HH:mm')}
      </h5>
      <li className="weather-circle__wave-height">
        <SeaWaveIcon />
        <p>{currentWeather?.waveHeight} m</p>
      </li>
      <li className="weather-circle__wave-period">
        <BarometerIcon />
        <p>{currentWeather?.wavePeriod} s</p>
      </li>
      <li className="weather-circle__wave-direction">
        <ArrowIcon angle={currentWeather?.waveDirectionDegrees} width={18} height={18} />
        <p>{currentWeather?.waveDirection}</p>
      </li>
      <li className="weather-circle__water-temperature">
        <p>{currentWeather?.waterTemperature?.toFixed()}°</p>
        <WaveThermometerIcon />
      </li>
    </>
  )
}

const AstroInfo = ({ astroData }) => {
  return (
    <>
      <li className="weather-circle__sunrise">
        <SunriseIcon width={40} height={27} />
        <p>{astroData?.sunrise?.split(' ')[0]}</p>
      </li>
      <li className="weather-circle__sunset">
        <SunsetIcon width={40} height={27} />
        <p>{astroData?.sunset?.split(' ')[0]}</p>
      </li>
    </>
  )
}

const WeatherCircleSVG = ({ gradientColors = gradientColorsDefault, fillColors = fillColorsDefault }) => {
  return (
    <div className="weather-circle__svg-container">
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <stop key={index} offset={color.offset} stopColor={color.color} />
            ))}
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="gradientFill" x1="50%" y1="0%" x2="50%" y2="100%">
            {fillColors.map((color, index) => (
              <stop key={index} offset={color.offset} stopColor={color.color} />
            ))}
          </linearGradient>
        </defs>
        <circle className="weather-circle__circle" cx="50%" cy="50%" r="47%" fill="url(#gradientFill)" />
      </svg>
    </div>
  )
}

const WeatherInfoCircle = ({ currentWeather, astroData, userTime, isPending }) => {
  return (
    <>
      <div className="weather-circle">
        <div className="weather-circle__container">
          <WeatherCircleSVG />
        </div>
        {isPending ? (
          <Spinner
            linearGradient="secondary"
            size="large"
            className="weather-circle__spinner"
          />
        ) : (
          <>
            <WeatherDetails
              currentWeather={currentWeather}
              userTime={userTime}
            />
            <AstroInfo astroData={astroData} />
          </>
        )}
      </div>
    </>
  )
}

export default WeatherInfoCircle
