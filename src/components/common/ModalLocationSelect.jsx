import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useGeolocation from '../../hooks/useGeolocation'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'

import Modal from './Modal'
import SelectBeach from './SelectBeach'

const ModalLocationSelect = ({ isOpen, setIsOpen }) => {
  const [isBeachListVisible, setIsBeachListVisible] = useState(false)
  const [isNearestBeachVisible, setIsNearestBeachVisible] = useState(false)
  const { getLocation } = useGeolocation()
  const navigate = useNavigate()

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

  const handleSelectBeach = (beach) => {
    console.log('beach', beach)
    navigate('/home')
    setIsOpen(false)
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
            IconAfter={getLocation.isPending && <Spinner />}
            disabled={getLocation.isPending || isBeachListVisible}
            onClick={handleGPSClick}
          />
          <Button
            className="modal-location-select__button"
            text="Lista"
            typeStyled="primary"
            IconAfter={isBeachListVisible && <Spinner />}
            disabled={isBeachListVisible || getLocation.isPending}
            onClick={toggleBeachList}
          />
        </section>
        {isBeachListVisible && (
          <>
            <SelectBeach onChangeSelect={handleSelectBeach} />
            <button onClick={toggleBeachList} className="modal-location-select__go-back">
              Volver
            </button>
          </>
        )}

        {isNearestBeachVisible && (
          <>
            <SelectBeach isNearestPlaces onChangeSelect={handleSelectBeach} />
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