import React from 'react'
import { Link, NavLink } from "react-router-dom";

import { styles } from "../styles"
const Error = () => {
  return (
    <>
    <header className={`${styles.container}`}>
     <div className='flex items-center space-x-3'>
      <NavLink to='/' className=' text-xl'>Home</NavLink>
    <span>/</span>
      <NavLink to='*' className='font-bold text-xl'>404 Error</NavLink>
     </div>
     <div className='text-center py-32'>
        <h2 className='text-9xl font-serif'>404 Not Found</h2>
        <p className='font-serif text-lg pt-10 pb-20'>Siz tashrif buyurgan sahifa topilmadi. Bosh sahifaga o'tishingiz mumkin.</p>
        <NavLink className='cursor-pointer border  border-black py-3 px-7' to='/'>Bosh sahifaga qaytish</NavLink>
     </div>
    </header>
    
    </>
  )
}

export default Error