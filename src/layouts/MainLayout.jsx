import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import ModalLocationSelect from '../components/common/ModalLocationSelect'
import Tabs from '../components/ui/Tabs'
import useStoreUser from '../store/useStoreUser'

const MainLayout = () => {
  const [isModalLocationSelectOpen, setIsModalLocationSelectOpen] = useState(false)
  const navigate = useNavigate()
  const { user } = useStoreUser()

  useEffect(() => {
    if (!user.locationSelected) {
      return setIsModalLocationSelectOpen(true)
    }
    navigate('/astro')
  }, [navigate, user.locationSelected])


  return (
    <>
      <div className="main-layout">
        <Outlet />
        <ModalLocationSelect
          isOpen={isModalLocationSelectOpen}
          setIsOpen={setIsModalLocationSelectOpen}
        />
      </div>
      <Tabs />
    </>
  )
}

export default MainLayout