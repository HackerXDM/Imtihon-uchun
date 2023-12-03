import React from 'react'

//import styles
import { styles } from "../styles"

// import Img
import TelImg from "../image/tel-img.png"

const Footer = () => {
  return (
    <footer className=' bg-black text-white'>
      <div className={`${styles.container}`}>
        <ul className='uppercase  grid grid-cols-3 gap-40 pb-16 pt-6'>
          <li className='leading-10'>
            <span className='text-xs hover:text-red-500'>Vaqt markazi taymer</span>
            <p className='hover:text-red-500 text-2xl leading-10'>Rossiya, Moskva 01001,</p>
            <p className='hover:text-red-500 text-2xl leading-10'>st. Bolshaya</p>
            <p className='hover:text-red-500 text-2xl'>Vasilkovskaya, 5</p>
          </li>

          <li className='leading-10 text-sm'>
            <p className='hover:text-red-500' >Shveytsariya soatlari</p>
            <p className='hover:text-red-500'>Zargarlik buyumlari</p>
            <p className='hover:text-red-500'>Aksessuarlar</p>
            <p className='hover:text-red-500'>Aksessuarlar</p>
          </li>
          <li className='leading-10 text-sm'>
            <p className='hover:text-red-500'>Sotish</p>
            <p className='hover:text-red-500'>Taxmin qilish</p>
            <p className='hover:text-red-500'>Piyon</p>
            <p className='hover:text-red-500'>kontaktlar</p>
          </li>
        </ul>
      <hr className='h-6  w-100%' />
    <button className='border-2 py-3 uppercase text-sm px-4'>google xaritalarida oching</button>
<div>
  <p>Markaz haqida</p>
  <p>Kafolotlar</p>
</div>
<div>
  <img src={TelImg} alt="" />
</div>
   
      </div>
    </footer>
  )
}

export default Footer