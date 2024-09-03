import { useEffect, useRef } from 'react'

const image = 'https://i.pinimg.com/originals/06/44/39/064439aa2bb616d63c89a30ff6253625.jpg'

const Modal = ({
  isOpen = true,
  children,
  className,
  closeModal,
  backDropColor = '',
  backDropImage = image
}) => {
  const ref = useRef()

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <dialog
          ref={ref}
          method="dialog"
          onCancel={closeModal}
          style={{
            '--backdrop-color': backDropColor,
            '--backdrop-image': backDropColor ? 'none' : `url(${backDropImage})`
          }}
          className={`modal ${className}`}
        >
          {children}
        </dialog>
      )}
    </>
  )
}


export default Modal

