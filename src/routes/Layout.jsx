import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import pokeballIcon from '../assets/pokeball.svg'
import './Layout.css'

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <div className="rolling-pokeball">
        <img src={pokeballIcon} alt="Rolling Pokéball" className="pokeball-animation" />
      </div>
      <Outlet />
    </div>
  )
}

export default Layout