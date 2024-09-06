import { useMutation } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

import useStoreUser from '../store/useStoreUser'

const useGeolocation = () => {
  const [locationError, setLocationError] = useState(null)
  const [isLocationSuccess, setIsLocationSuccess] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)

  const { setUserGeolocation } = useStoreUser()

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords
    setUserGeolocation({ latitude, longitude })
    setLocationError(null)
    setIsLocationSuccess(true)
    setIsLocationLoading(false)
  }

  const handleError = () => {
    setIsLocationLoading(false)
    setIsLocationSuccess(false)
    setLocationError('No se ha podido obtener la ubicación.')
  }

  const getLocation = useMutation({
    mutationFn: () => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject('La geolocalización no es compatible con este navegador.')
          return
        }
        navigator.geolocation.getCurrentPosition(
          (position) => {
            handleSuccess(position)
            resolve()
          },
          (error) => {
            handleError(error)
            reject()
          }
        )
      })
    }
  })


  // useEffect(() => {
  //   if (isLocationSuccess) {
  //     setIsLocationLoading(false)
  //   }
  // }, [isLocationSuccess])


  return { locationError, isLocationSuccess, isLocationLoading, getLocation }
}

export default useGeolocation
