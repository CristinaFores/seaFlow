import { Outlet } from 'react-router-dom'

import ModalLocationSelect from '../components/common/ModalLocationSelect'
import useGeolocation from '../hooks/useGeolocation'


const MainLayout = () => {

  const { getLocation, isLocationLoading, locationError, isLocationSuccess } = useGeolocation()

  return (
    <>
      <div className="main-layout">
        <Outlet />

        <ModalLocationSelect
          onGPSClick={getLocation}
          isPending={isLocationLoading}
          isError={locationError}
          isSuccess={isLocationSuccess}
        />
      </div>
    </>
  )
}

export default MainLayout