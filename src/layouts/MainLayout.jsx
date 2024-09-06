import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import ModalLocationSelect from '../components/common/ModalLocationSelect'
import useStoreUser from '../store/useStoreUser'

const MainLayout = () => {
  const [isModalLocationSelectOpen, setIsModalLocationSelectOpen] = useState(false)
  const { user } = useStoreUser()

  useEffect(() => {
    if (!user.locationSelected) {
      setIsModalLocationSelectOpen(true)
    }
  }, [user.locationSelected])

  return (
    <>
      <div className="main-layout">
        <Outlet />
        <ModalLocationSelect
          isOpen={isModalLocationSelectOpen}
          setIsOpen={setIsModalLocationSelectOpen}
        />
      </div>
    </>
  )
}

export default MainLayout