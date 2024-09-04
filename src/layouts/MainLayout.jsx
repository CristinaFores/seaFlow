import { Outlet } from 'react-router-dom'

import ModalLocationSelect from '../components/common/ModalLocationSelect'


const MainLayout = () => {
  return (
    <>
      <div className="main-layout">
        <Outlet />
        <ModalLocationSelect
          isOpen={true}
          onGPSClick={() => { }}
          onListClick={() => { }}
        />
      </div>
    </>
  )
}

export default MainLayout