
import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { format } from 'date-fns'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import WeatherInfoCircle from '../components/common/WeatherInfoCircle'
import DayPicker from '../components/ui/DayPicker'
import TimeSlider from '../components/ui/TimeSlider'
import TitleLocation from '../components/ui/TitleLocation'
import moonPhase from '../helpers/theme/moonPhase'
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

const Moon = () => {
  const moonRef = useRef()
  const worldRef = useRef()

  // Load textures using the useTexture hook from @react-three/drei
  const [texture, displacementMap, worldTexture] = useTexture([
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg'
  ])

  // Animate the moon and the world in the frame loop
  useFrame(() => {
    moonRef.current.rotation.y += 0.002
    moonRef.current.rotation.x += 0.0001
    worldRef.current.rotation.y += 0.0001
    worldRef.current.rotation.x += 0.0005
  })

  return (
    <>
      {/* Moon */}
      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 60, 60]} />
        <meshPhongMaterial
          map={texture}
          displacementMap={displacementMap}
          displacementScale={0.06}
          bumpMap={displacementMap}
          bumpScale={0.04}
          reflectivity={0}
          shininess={0}
        />
      </mesh>

      {/* World Background */}
      <mesh ref={worldRef}>
        <sphereGeometry args={[1000, 60, 60]} />
        <meshBasicMaterial map={worldTexture} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

const Lighting = () => {


  return (
    <>
      {/* Directional Light */}
      <directionalLight intensity={1} position={[-100, 10, 50]} />

      {/* Hemisphere Light */}
      <hemisphereLight
        intensity={0.1}
        skyColor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        position={[0, 0, 0]}
      />
    </>
  )
}

const MoonScene = ({ className }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className={className}>
      {/* Orbit Controls */}
      <OrbitControls enablePan={false} />

      {/* Lighting */}
      <Lighting />

      {/* Moon and World */}
      <Moon />
    </Canvas>
  )
}


const AstroPage = () => {
  const { user } = useStoreUser()

  const { location } = user

  const {
    mutate: getWeatherForecast,
    data: newWeatherForecast,
    isPending: isWeatherForecastPending,
  } = useWeatherForecast()

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

  const data = newWeatherForecast?.astro ?? {}

  const illuminationPercentage = parseInt(data.illumination) // Convertir la iluminación a número

  return (
    <div className="astro-page">
      <h1 className="weather-home-page__title">Astro</h1>
      <TitleLocation location={location} />
      <MoonScene className="astro-page__canvas" />

      <div className={'moon-card'}>
        <div className={'moon-card__header'}>
          <h1 className={'moon-card__header-title'}>Fase Lunar</h1>
          <p className={'moon-card__header-description'}>Luna en {data?.currentMoonPhase}</p>
          <div className={'moon-card__illumination-bar'}>
            <div
              className={'moon-card__illumination-fill'}
              style={{ width: `${illuminationPercentage}%` }}
            ></div>
          </div>
        </div >

        <div className={'moon-card__info-container'}>
          <div className={'moon-card__info-container__info-block'}>
            <p className={'moon-card__info-container__info-block-content'}>
              <strong>Salida:</strong> {data?.moonrise}
            </p>
            <p className={'moon-card__info-container__info-block-content'}>
              <strong>Puesta:</strong> {data?.moonset}
            </p>
            <p className={'moon-card__info-container__info-block-content'}>
              <strong>Fase:</strong> {moonPhase(data?.nextPhase?.phase)}
            </p>

            <p className={'moon-card__info-container__info-block-content'}>
              <strong>Luna Llena:</strong> {data?.fullMoon?.day}/{data?.fullMoon?.month}/{data?.fullMoon?.year}
            </p>
          </div >
        </div >
      </div >
    </div >
  )
}

export default AstroPage