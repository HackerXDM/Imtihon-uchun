import React from 'react'

//import image
import BrendSoat from "../image/BrendSoat.png"
import Nuqta from "../image/Nuqta.svg"
import Block from "../image/Block.png"
import HandTime from "../image/HandTime.png"
import MoneyLight from "../image/money-light.png"

//import
import { styles } from "../styles"
import { Link, NavLink } from "react-router-dom";

const ShveytsariyaSoatlari = () => {
  return (
   <>
    <header className='bg-gray-100'>
        <div className={`${styles.HeaderContainer}`}>
          <div className='flex space-x-36'>
            <div className='pt-20'>
              <img src={BrendSoat} alt="Sumka" />
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
   </>
  )
}

export default ShveytsariyaSoatlari