import { useEffect } from 'react'
import Select from 'react-select'

import useBeaches from '../../hooks/useBeaches'
import useNearestPlaces from '../../hooks/useNearestPlaces'
import useStoreUser from '../../store/useStoreUser'

const SelectBeach = ({ onChangeSelect, isNearestPlaces = false }) => {
  const { user: { geolocation, locationSelected }, setSelectedUserLocation } = useStoreUser()
  const { beachesSpain, getBeaches: { isPending } } = useBeaches()

  const { nearestPlaces, findNearestPlaces } = useNearestPlaces(
    geolocation.latitude,
    geolocation.longitude,
    beachesSpain,
    15
  )

  const currentBeaches = isNearestPlaces ? nearestPlaces : beachesSpain
  useEffect(() => {
    if (isNearestPlaces && !isPending) {
      findNearestPlaces()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNearestPlaces, isPending, geolocation.latitude, geolocation.longitude])

  return (
    <section className="select-beach">
      <label>{isNearestPlaces ? 'Playas cercanas' : 'Playas'}</label>
      <Select
        name="beach"
        classNamePrefix="select"
        className="select-beach__select"
        options={currentBeaches}
        placeholder="Selecciona una playa"
        value={currentBeaches?.find(
          (beach) => beach?.value === locationSelected?.value
        )}
        getOptionLabel={(option) => {
          return (
            <div className="select-beach__select__option">
              <p className="select-beach__select__label"> {option.name}
                <span className="select-beach__select__city">{option.city}</span>
              </p>
              {isNearestPlaces && (
                <span className="select-beach__select__distance">
                  {option.distance ? `${option.distance.toFixed(2)} km` : ''}
                </span>
              )}
            </div>
          )
        }}
        onChange={(option) => {
          setSelectedUserLocation(option)
          onChangeSelect(option)
        }}
        styles={{ position: 'relative', zIndex: 100000000 }}
      />
    </section>
  )
}

export default SelectBeach
