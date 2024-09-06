import { useState } from 'react'

import useGeolocation from '../../hooks/useGeolocation'
import useStoreUser from '../../store/useStoreUser'
import Button from '../ui/Button'

import Modal from './Modal'
import SelectBeach from './SelectBeach'

const ModalLocationSelect = ({
  isOpen,

}) => {
  const [isBeachListVisible, setIsBeachListVisible] = useState(false)
  const [isNearestBeachVisible, setIsNearestBeachVisible] = useState(false)
  const { getLocation } = useGeolocation()

  const toggleBeachList = () => {
    setIsBeachListVisible(!isBeachListVisible)
  }

  const toggleNearestBeach = () => {
    setIsNearestBeachVisible(!isNearestBeachVisible)
  }

  const handleGPSClick = () => {
    getLocation.mutate('', {
      onSuccess: () => {
        setIsNearestBeachVisible(true)
        console.log('Location retrieved successfully')
      },
      onError: (error) => {
        console.log('Failed to retrieve location', error)
      },
    })
  }
  return (
    <Modal
      isOpen={isOpen}>
      <div className="modal-location-select">
        <h2 className="modal-location-select__title">
          Comienza añadiendo una ubicación
        </h2>
        <section className="modal-location-select__buttons"
          style={{ display: isBeachListVisible || isNearestBeachVisible ? 'none' : 'flex' }}>
          <Button
            className="modal-location-select__button"
            text="GPS"
            typeStyled="primary"
            onClick={handleGPSClick}
          />
          <Button
            className="modal-location-select__button"
            text="Lista"
            typeStyled="primary"
            onClick={toggleBeachList}
          />
        </section>
        {isBeachListVisible && (
          <>
            <SelectBeach />
            <button onClick={toggleBeachList} className="modal-location-select__go-back">
              Volver
            </button>
          </>
        )}

        {isNearestBeachVisible && (
          <>
            <SelectBeach isNearestPlaces />
            <button onClick={toggleNearestBeach} className="modal-location-select__go-back">
              Volver
            </button>
          </>
        )}

        <p className="modal-location-select__description">
          Selecciona una de las opciones anteriores para
          encontrar una ubicación cercana a ti.
        </p>
      </div>
    </Modal>
  )
}

export default ModalLocationSelect