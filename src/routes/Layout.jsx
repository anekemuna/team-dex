import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout