import { Outlet } from 'react-router-dom'

import Button from '../components/ui/Button'

const MainLayout = () => {
  return (
    <>
      <div className="main-layout">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout