import React from 'react'

//import syles
import { styles } from "../styles"

//import image
import WaterWatch from "../image/waterWatch.png"
import Watch from "../image/Watch.png"
import Nuqta from "../image/Nuqta.svg"

//import material tailwind
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

//import Navlink
import { NavLink } from 'react-router-dom'

const KompaniyaHaqida = () => {
  return (
    <>
      <header> 
        {/* Breadcrumbs */}
      <Breadcrumbs  className = "w-full  px-[140px] py-10  mx-auto"  aria-label="breadcrumb">
          <NavLink to='/onlaynBaholash'>
            Onlayn baholash
          </NavLink>
          <NavLink
            underline="hover"
            color="inherit"
            to='/'
          >
            Sotish
          </NavLink>
          <Typography color="text.primary">Kompaniya</Typography>
        </Breadcrumbs>

        <ul className='grid grid-cols-2 font-serif '>
          <li>
            <img style={{ width: '930px', height: '650px' }} src={WaterWatch} alt="WaterWatch" />
          </li>
          <li className='w-full max-w-xl pl-12'>
            <div className='flex items-center space-x-3 pt-[10%]'>
              <p className='text-green-600 font-semibold '>Kompaniya haqida</p>
              <img style={{ width: '4px', height: '4px' }} src={Nuqta} alt="nuqtaImage" />
              <p className='text-green-600 font-semibold'> Yetkazib berish va kafolat</p>
            </div>
            <li className='py-4'>
              <span className='text-3xl font-base'>Yetkazib berish</span>
            </li>
            <li className='py-1'>
              <span>Moskva halqa yo'lida - BEPUL</span>
            </li>
            <li className='py-2'>
              <span>Moskva viloyatida: 250-500 rubl.</span>
            </li>
            <li className='pt-5'>
            <span>Agar sotib olish miqdori 200 tr bo'lsa. rubl va undan yuqori,
              Moskva viloyati bo'ylab yetkazib berish bepul.</span>
            </li>
            <li className='py-5'>
            <span>Veb-saytda buyurtma berganingizdan so'ng yoki kompaniya menejeri
              bilan muloqot qilish jarayonida biz etkazib berish vaqti va kunini kelishib olamiz. Belgilangan kunda kurer siz bilan bog'lanadi va etkazib berish vaqti va joyini yana bir bor kelishib oladi. Vaqt va joy oʻzgarishi haqida +7 (905) 707-15-15
              raqamiga qoʻngʻiroq qilib oldindan xabardor qilishingiz mumkin.</span>
            </li>
            <span>Boshqa hududlarga yetkazib berish kurerlik xizmatlari orqali amalga oshiriladi:
              SDEK, Business Lines, DHL, Pony Express, SPSR  Express.Rossiya bo'ylab yetkazib berish
              3 ish kuni ichida amalga oshiriladi.</span>
          </li>
          <li>
            <div className='flex items-center'>
              <p>Kompaniya haqida</p>
              <img src={Nuqta} alt="nuqtaImage" />
              <p> Yetkazib berish va kafolat</p>
            </div>
            <h3>Kafolat</h3>
            <p>Katalogda taqdim etilgan barcha soatlar biz tomonidan haqiqiyligi va ishlashi uchun tekshirilgan va originaldir. Biz eskirish paytida tabiiy qarish natijasida yuzaga kelgan barcha kamchiliklarni bartaraf qilamiz. Soat tiklangan, tozalangan va sayqallangan holda mukammal holatda.
              Barcha soatlar sotib olingan kundan boshlab 1 yil kafolat bilan ta'minlanadi.
              Agar uning tashqi ko'rinishi va to'plamga kiritilgan boshqa elementlar buzilmagan bo'lsa, siz soatni 7 kun ichida qaytarishingiz mumkin.</p>
          </li>
          <li>
            <img style={{ width: '800px', height: '650px' }} src={Watch} alt="WatchImage" />
          </li>
        </ul>
      </header>
    </>
  )
}

export default KompaniyaHaqida