import React from 'react'

//import syles
import { styles } from "../styles"

//import Img
import TimerImg from "../image/Timer_Img.svg"

//Navlink
import { NavLink } from 'react-router-dom'
import { PhoneOutlined, Telegram } from '@mui/icons-material'

const Header = () => {
  return (
    <header>
      <div className={`${styles.container}`}>
        <ul>
          <div className="flex items-center justify-between py-5">
            <li className='w-full flex justify-center items-center'>
              <img src={TimerImg} alt="Timer.logo" />
            </li>
            <li className='space-x-6 flex items-center'>
            <a href="https://t.me/Xack_XDM" target="_blank"> <Telegram /></a> 
             <a href="tel:+998978383880"><PhoneOutlined /></a> 
            </li>
          </div>
          <li className='ml-5 space-x-32 font-normal uppercase'>
            <NavLink className="hover:text-green-400" to='/'>Sotish</NavLink>
            <NavLink className="hover:text-green-400" to='/onlaynBaholash'>Onlayn Baholash</NavLink>
            <NavLink className="hover:text-green-400" to='/katalog'>Katalog</NavLink>
            <NavLink className="hover:text-green-400" to='/kompaniyaHaqida'>Kompaniya haiqda</NavLink>
            <NavLink className="hover:text-green-400" to='/xizmatlar'>Xizmatlar</NavLink>
            <NavLink className="hover:text-green-400" to='/kontakt'>Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header