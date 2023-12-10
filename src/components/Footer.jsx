import React from 'react'

//import styles
import { styles } from "../styles"

// import Img
import TelImg from "../image/tel-img.png"
import TelegramImg from "../image/telegram.svg"
import WhatsappImg from "../image/whatsapp.svg"

const Footer = () => {
  return (
    <footer className=' bg-black text-white py-8'>
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
        <div className='flex justify-between items-center max-w-4xl'>
          <div className='flex space-x-20 pt-14'>
            <p className='underline underline-offset-4'>Markaz haqida</p>
            <p className='underline underline-offset-4'>Kafolotlar</p>
          </div>
          <div className='flex space-x-5 pt-14'>
            <img src={WhatsappImg} alt="TelImg" />
            <img src={TelImg} alt="TelImg" />
            <img src={TelegramImg} alt="TelImg" />
          </div>
        </div>
        <ul className='flex space-x-20 pt-10'>
          <li>
            <p className='text-[#0EDC8B] leading-9'>WhatsApp, Telegram</p>
            <span className='text-3xl'>+7 (926) 789-99-99</span>
          </li>
          <li>
            <p className='text-[#0EDC8B] leading-9'>Shahar telefoni</p>
            <span className='text-3xl'>+7 (926) 789-99-99</span>
          </li>
          <li>
            <p className='text-[#0EDC8B] leading-9'>Pochta</p>
            <span className='text-3xl'>info@chroland.ru</span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer