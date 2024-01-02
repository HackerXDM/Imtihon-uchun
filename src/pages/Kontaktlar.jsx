import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles.css';
import { styles } from "../styles"

// import required modules
import { Navigation } from 'swiper/modules';


const Kontaktlar = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 flex justify-center text-center py-3">
          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Biz brendlarni sotib olamiz</h1>
            <p className='py-5 w-[700px] font-serif text-lg ml-[20%] tracking-normal'  style={{ letterSpacing: '2px' }}>
              Rolex Aerowatch A.Lange & Sohne  Alpina Apple Watch Armand Nicolet  Armin Strom Arnold & Son Artya Audemars Piguet Ball Baume Mercier Bell Ross Blancpain
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Brend nima?</h1>
            <p className='py-5 w-[1000px] font-serif text-lg ml-[10%] tracking-normal'  style={{ letterSpacing: '2px' }}>
            Brend (ing. Brand) — tamg‘a, belgi. Brend juda katta narsa uni oddiygina qilib ta’riflab bo‘lmaydi. Brend faqat logotip emas. Brend bu kompaniya strategiyasi, hodimlari, narx siyosati, raqobatchilardan farqlanishi, kuchli taraflari, iste’molchilar uchun yaratilgan o‘ziga xos qiymatlar va oxirida nom va logotip. Brendni ishlab chiqishdan asosiy maqsad, doimiy mijozlarga ega bo‘lish, bozorda sezilarli farqni va qiymatni hosil qilish hisoblanadi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Dizayn nima?</h1>
            <p className='py-5 w-[800px] font-serif text-lg ml-[18%] tracking-normal'  style={{ letterSpacing: '2px' }}>
            Brendga dizayner ko‘zi bilan qaralsa, o‘ziga xos yangi bir dunyoni ko‘ramiz.
Brend — bu kompaniya nomi, slogani, logosi, ranglari, simvollari, stili va boshqa vizual atributlari hisoblanadi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Rebrending nima?</h1>
            <p className='py-5 w-[800px] font-serif text-lg ml-[18%] tracking-normal'  style={{ letterSpacing: '2px' }}>
            Rebrending (ing. Rebranding) — brendni o‘zgartirish deganidir. Rebranding deganda ko‘pchilik shunchaki logotip o‘zgarishini tushinishi mumkin. Ammo rebranding bu butun tizimning o‘zgarishidir, logotip yangilangani esa, shunchaki o‘zgarishlar haqida ma’lumot berishday gap.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Stil nima?</h1>
            <p className='py-5 w-[800px] font-serif text-lg ml-[18%] tracking-normal'  style={{ letterSpacing: '2px' }}>
            Stil (ing. Style) — uslub, usul, odat, farqlanuvchi yo‘nalish. Stil boshqalardan ajratib turuvchi asosiy omil hisoblanadi. Stil ham brend kabi katta tushuncha. Biz faqat uning dizaynga bog‘liq qismini gapirib o‘tamiz. Dizaynda stilning vazifasi, brendga tegishli vizual atributlarni o‘ziga xos uslubda, stilda bo‘lishi va ularning boshqalardan farqlanuvchi tarzda qo‘llanilishi hisoblanadi.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='text-4xl font-serif' style={{ letterSpacing: '2px' }}>Restaylingchi? U nima?</h1>
            <p className='py-5 w-[800px] font-serif text-lg ml-[18%] tracking-normal'  style={{ letterSpacing: '2px' }}>
            Restayling (ingl. — Restyling) vizual darajadagi elementlarni o‘zgartirish bilan kifoyalanadi. Agar kompaniyangizda hech nima o‘zgarmasa, ammo siz kompaniyaning logotipi va vizual atributlari ma’nan eskirganini his etsangiz, unda restayling qo‘llash mumkin.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Kontaktlar