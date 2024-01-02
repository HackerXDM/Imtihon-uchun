import React from 'react'

//import image
import SotishImage from "../image/Sotish.png"
import Nuqta from "../image/Nuqta.svg"
import Block from "../image/Block.png"
import HandTime from "../image/HandTime.png"
import MoneyLight from "../image/money-light.png"
import Soat from "../image/Soat.png"

//import
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles"



const Sotish = () => {
  return (
    <>
      <header className='bg-gray-100'>
        <div className={`${styles.HeaderContainer}`}>
          <div className='flex space-x-36'>
            <div className='pt-20'>
              <img src={SotishImage} alt="Sumka" />
            </div>
            <div>
              <div className='flex items-center space-x-3 pt-[10%]'>
                <NavLink to="/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
                <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
                <NavLink className="text-gray-600 font-semibold" to="/sotish/shveytsariya_soatlari">
                  Sotish
                </NavLink>
                <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
                <p className='text-black font-semibold'>Sumkalar</p>
              </div>
              <p className='text-5xl max-w-lg py-10'>30 daqiqada naqd pul oling</p>
              <div className='flex items-center space-x-2'>
                <img src={Block} alt="Block" />
                <p>To'lov darhol joyida</p>
              </div>
              {/* 2-div */}
              <div className='flex items-center space-x-2 py-8'>
                <img src={HandTime} alt="Block" />
                <p>Arizalarni qabul qilish 24 soat</p>
              </div>

              {/* 3-div */}
              <div className='flex items-center space-x-2'>
                <img src={MoneyLight} alt="Block" />
                <p>Onlayn baholash bepul</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION */}
      <section class="flex justify-center ">
        <div class="flex py-10 space-x-52">
          {/* <!-- 1-div --> */}
          <div class="flex items-center space-x-3">
            <div>
              <img src={Block} alt="Block" />
            </div>
            <div>
              <p>Pul allaqachon kiritilgan 2</p>
              <p>Qo'llashdan keyin soat</p>
            </div>
          </div>
          {/* <!-- 2-div --> */}
          <div class="flex items-center space-x-3">
            <div>
              <img src={HandTime} alt="Block" />
            </div>
            <div>
              <p>Huquqiy</p>
              <p>Tranzaktsiyaning tozaligi</p>
            </div>
          </div>
          {/* <!-- 3-div --> */}
          <div class="flex items-center space-x-3">
            <div>
              <img src={MoneyLight} alt="Block" />
            </div>
            <div>
              <p>Bilan ishlaymiz</p>
              <p>2004 yil</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div>
          <div className='flex items-center space-x-10'>
            <div className='w-[500px] h-[600px] bg-gray-200'>
              <img src={Soat} alt="Christian" />
            </div>
            <div className='px-10'>
              <h3 className='text-3xl'>Soat sotib olish</h3>
              <p className='w-[500px] font-serif pb-8 pt-2'>Biz 85 million rublgacha to'laymiz. ariza berilgan kuni.
                Shveytsariyalik soatingizni yuqori narxda sotmoqchimisiz, lekin eng yuqori narxni qaerdan olishni bilmayapsizmi?
                Timer soatlar saloni Moskva va Moskva viloyatida hashamatli qo'l soatlarini sotib oladi. Biz mashhur brendlarning yangi va ishlatilgan original soatlarini qabul qilamiz. Biz sizning huzuringizda onlayn yoki tomosha markazida baho beramiz.
                Baholash uchun onlayn arizalarni qabul qilish - kuniga 24 soat.</p>
              <button className='border-black py-2 px-10 border '>Baholash uchun soatingizni yuboring</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Sotish