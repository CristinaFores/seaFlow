
import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { format } from 'date-fns'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import WeatherInfoCircle from '../components/common/WeatherInfoCircle'
import DayPicker from '../components/ui/DayPicker'
import TimeSlider from '../components/ui/TimeSlider'
import TitleLocation from '../components/ui/TitleLocation'
import { useWeatherForecast } from '../hooks/useWeatherForecast'
import useStoreUser from '../store/useStoreUser'

const textureURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg'
const displacementURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg'
const worldURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg'


// const Moon3D = () => {
//   const moonTexture = useTexture('src/assets/moon.jpg')

//   const moonRef = useRef()

//   useFrame(() => {
//     if (moonRef.current) {
//       moonRef.current.rotation.y += 0.001
//     }
//   })

//   return (
//     <mesh ref={moonRef}>
//       <sphereGeometry args={[3, 64, 64]} />
//       <meshStandardMaterial
//         map={moonTexture}
//         roughness={0.9}   // Reducir rugosidad para reflejar más luz
//         metalness={0.2}   // Aumentar un poco la metalicidad
//         transparent={true}
//       />

//     </mesh>
//   )
// }

// const MoonPhase = ({ phase, visibility = '0', moonrise, moonset }) => {
//   return (
//     <div className="moon-phase">
//       <Canvas style={{ width: '250px', height: '250px' }}>
//         <directionalLight
//           position={[5, 0, 0]}
//           intensity={1}
//           castShadow />

//         {/* Luz ambiental muy baja para evitar zonas completamente oscuras */}
//         <ambientLight intensity={1} />

//         <OrbitControls enableZoom={false} />
//         <Moon3D visibility={visibility} />
//       </Canvas>
//       <div className="moon-phase__visibility">
//         <div
//           className="moon-phase__visibility-bar"
//           style={{ width: `${visibility}%` }}
//         ></div>
//         <span className="moon-phase__visibility-percent">
//           {visibility}%
//         </span>
//       </div>
//       <div className="moon-phase__rise-set">
//         <span className="moon-phase__moonrise">Moonrise: {moonrise}</span>
//         <span className="moon-phase__moonset">Moonset: {moonset}</span>
//       </div>
//       <div className="moon-phase__phase-description">{phase}</div>
//     </div>
//   )
// }



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

  console.log('newWeatherForecast', newWeatherForecast?.astro)

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
          selectedDate={date}
          setSelectedDate={setUserDate}
        />


      </section>
    </div>
  )
}


export default WeatherHomePage


