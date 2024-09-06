import { useCallback, useState } from 'react'

const useNearestPlaces = (latitude, longitude, places = [], sizePlaces) => {

  const [nearestPlaces, setNearestPlaces] = useState([])

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180
    const R = 6371
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return distance
  }
  const findNearestPlaces = useCallback(() => {

    const distances = places.map(place => {
      const distance = calculateDistance(latitude, longitude, place.latitude, place.longitude)
      return { ...place, distance }
    })

    const sortedPlaces = distances.sort((a, b) => a.distance - b.distance).slice(0, sizePlaces)
    setNearestPlaces(sortedPlaces)
  }, [latitude, longitude, places, sizePlaces])


  return { nearestPlaces, findNearestPlaces }
}

export default useNearestPlaces