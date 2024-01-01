import React from 'react'
import { Link, NavLink } from "react-router-dom";

// import image
import Nuqta from "../image/Nuqta.svg"
import SearchImg from "../image/iconSearch.svg"
import IconArrow from "../image/iconArrow.svg"

//import syles
import { styles } from "../styles"

const YetkazibBerishVaKafolat = () => {
  return (
    <>
      <header className={`${styles.container}`}>
        <div>
          {/* Link */}
          <div className='flex items-center space-x-3'>
            <NavLink to="/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink className="text-gray-600 font-semibold" to="/sotish">
              Sotish
            </NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink to="/kompaniya_haqida/yetkazib_berish_va_kafolat" className='text-black font-semibold'>Yetkazib berish va kafolat</NavLink>
          </div>

          {/* List-style */}
          <ul>
            <li>
              <h2 className='uppercase text-3xl pb-2 pt-10'>Shveytsariya SOATLARINI TA'MIRLASH</h2>
              <p>Soatingiz aniq va chiroyli bo'lishini ta'minlash uchun soat lombardi - Taymer qo'l soatlarini ta'mirlash va tiklash bo'yicha xizmatlarni taqdim etadi.
                Biz qimmatbaho shveytsariyalik soatlarni ta'mirlash va texnik xizmat ko'rsatish bo'yicha ixtisoslashtirilgan servis markazi - <span className='underline text-green-500'>"REPASSAGENAYA"</span>  bilan hamkorlik qilamiz. Biz mashhur
                <span className='text-green-500 underline ml-5'>brendlarning</span>  hashamatli qo'l soatlariga ixtisoslashganmiz. Agar soatingizga texnik xizmat ko'rsatish kerak bo'lsa, tafsilotlarni veb-saytda tekshirishingiz mumkin.</p>
            </li>
            <li>
              <h3 className='text-3xl pb-3 pt-10'>Bizning mutaxassisligimiz</h3>
              <p className='w-[1100px] text-base'>Kompaniyaning sertifikatlangan mutaxassislari soatning tashqi ko'rinishi va ishlashini tiklash uchun zarur bo'lishi mumkin bo'lgan to'liq chora-tadbirlarni amalga oshiradilar.</p>
            </li>
            <li>
              <h3 className='text-3xl pb-3 pt-10 '>Batareyani almashtirish</h3>
              <p>Siz maxsus bilim va ko'nikmalarsiz qimmatbaho soatlarning nozik mexanizmlariga aralashmasligingiz kerak. Aks holda, bunday oddiy ko'rinadigan operatsiya ham jiddiy zararga olib kelishi mumkin. Bundan tashqari, korpusni demontaj qilish kafolatni bekor qilishi mumkin. Bizning mutaxassisimiz sizning ko'zingiz oldida elektr ta'minotini tezda almashtiradi.</p>
            </li>
            <li>
            <h3 className='text-3xl pb-3 pt-10'>Tasma yoki bilaguzukni almashtirish</h3>
            <p>Biz har qanday ishlab chiqaruvchining original tasmasini o'rnatishimiz mumkin. Stokda har doim kamarlarning katta tanlovi mavjud: metall, charm, kauchuk, mato. Katalogdan kerakli tasmani ham tanlashingiz mumkin va biz buyurtma beramiz. Bunday holda, etkazib berish taxminan 1-2 hafta davom etadi.</p>
            </li>
          </ul>
          <div className='py-10'>
          <li>Kosonni silliqlash</li>
          <li>Shishani silliqlashni tomosha qiling</li>
          <li>Soat mexanizmini ta'mirlash va tiklash</li>
          <li>Soatni ta'mirlash narxi</li>
          </div>
          <div>
          <ol>1. Kosonni silliqlash</ol>
          <ol>2. Shishani silliqlashni tomosha qiling</ol>
          <ol>3. Soat mexanizmini ta'mirlash va tiklash</ol>
          <ol>4. Soatni ta'mirlash narxi</ol>
          </div>
          <p className='pt-10 pb-32'>“Biz har qanday ishlab chiqaruvchining original tasmasini o'rnatishimiz mumkin. Stokda har doim kamarlarning katta tanlovi mavjud: metall, charm, kauchuk, mato. Katalogdan kerakli tasmani ham tanlashingiz mumkin va biz buyurtma beramiz. Bunday holda, etkazib berish taxminan 1-2 hafta davom etadi.'</p>
        </div>

        <div>
          <div>
            <div className='flex py-10'>
              <img className='bg-black p-3 px-4 cursor-pointer' src={SearchImg} alt="SearchImg" />
              <div className='flex'>
                <input type="text" className='  border border-black p-2  w-[1150px]  focus:outline-none focus:border-blue-500' placeholder='Matn kiriting' />
              </div>
              <img className='cursor-pointer py-2 px-3' src={IconArrow} alt="iconArrow" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default YetkazibBerishVaKafolat