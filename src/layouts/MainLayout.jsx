import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import ModalLocationSelect from '../components/common/ModalLocationSelect'
import useGeolocation from '../hooks/useGeolocation'
import useStoreUser from '../store/useStoreUser'


const MainLayout = () => {
  const [isModalLocationSelectOpen, setIsModalLocationSelectOpen] = useState(false)

  const { user } = useStoreUser()
  console.log(user)
  useEffect(() => {
    if (!user.locationSelected) {
      console.log('no location selected')
      setIsModalLocationSelectOpen(true)
    }
  }, [user.locationSelected])

  return (
    <>
      <div className="main-layout">
        <Outlet />

        {isModalLocationSelectOpen && (
          <ModalLocationSelect

          />
        )}
      </div>
    </>
  )
}

export default MainLayout