import Button from '../ui/Button'

import Modal from './Modal'

const ModalLocationSelect = ({
  isOpen,
  onGPSClick,
  onListClick,
  isPending,
  isError,
  isSuccess
}) => {

  return (
    <Modal
      isOpen={isOpen}>
      <div className="modal-location-select">
        <h2 className="modal-location-select__title">
          Comienza añadiendo una ubicación
        </h2>
        <section className="modal-location-select__buttons">
          <Button
            className="modal-location-select__button"
            text="GPS"
            typeStyled="primary"
            onClick={onGPSClick}
          />
          <Button
            className="modal-location-select__button"
            text="Lista"
            typeStyled="primary"
            onClick={onListClick}
          />
        </section>

        {isPending && (<p >Cargando ubicación...</p>)}
        {isError && (<p > Ha ocurrido un error al cargar la ubicación </p>)}
        {isSuccess && (<p > Ubicación cargada con éxito </p>)}

        <p className="modal-location-select__description">
          Selecciona una de las opciones anteriores para
          encontrar la estación más cercana a tu ubicación
        </p>
      </div>
    </Modal>
  )
}

export default ModalLocationSelect