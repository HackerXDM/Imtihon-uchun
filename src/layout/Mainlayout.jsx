import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
      <header> 
        <nav>
          <h1>My articles</h1>
          <NavLink to='/'>Sotish</NavLink>
          <NavLink to='/onlaynBaholash'>Onlayn Baholash</NavLink>
          <NavLink to='/katalog'>Katalog</NavLink>
          <NavLink to='/kompaniyaHaqida'>Kompaniya haiqda</NavLink>
          <NavLink to='/xizmatlar'>Xizmatlar</NavLink>
          <NavLink to='/kontakt'>Kontakt</NavLink>
        </nav>
      </header>
      <main>{<Outlet/>}</main>
      <footer></footer>
    </>
  )
}

export default Mainlayout