import React from 'react'
//img import
import telefon from "../image/telefon.png"
import IkkitaTelefonRasm from "../image/IkkitaTelefonRasm.png"
import Nuqta from "../image/Nuqta.svg"
import Block from "../image/Block.png"
import HandTime from "../image/HandTime.png"
import MoneyLight from "../image/money-light.png"

//import
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles"

const Telefon = () => {
  return (
    <>
      <header className='bg-gray-100'>
        <div className={`${styles.HeaderContainer}`}>
          <div className='flex space-x-36'>
            <div className='pt-20'>
              <img src={IkkitaTelefonRasm} alt="Sumka" />
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


      {/* MAIN */}
      <main>
        <div className='flex items-center space-x-10'>
          <div>
            <img src={telefon} alt="Christian" style={{ width: '740px', height: '600px' }} />
          </div>
          <div className='px-10'>
            <h3 className='text-3xl'>Hashamatli uyali telefonlarni </h3>
            <h3 className='text-3xl py-2'>sotib olish</h3>
            <p className='w-[500px] font-serif py-5'>Hozirgi vaqtda ishlatilgan uyali telefonni sotish nokni otish kabi oson - shunchaki reklama joylashtiring va xaridor sizni topishini kuting. Lekin hashamatli mobil telefonlar haqida nima deyish mumkin? Qanday qilib pul va vaqtni yo'qotmaslik kerak? <br />
              Sizning sherigingiz Timer lombardi bo'ladi. Biz 17 yildan ortiq vaqtdan beri hashamatli brend telefonlarini yuqori narxlarda sotib oldik.</p>
          </div>
        </div>
        <div className=' '>
          <h3 className='text-center w-[700px] ml-[25%] pb-5 pt-20 text-2xl'> Mutaxassislarimiz quyidagi brendlarning telefonlarini baholaydi va zudlik bilan sotib oladi:</h3>
          <div className='flex items-center space-x-10 px-36'>
            
          </div>
        </div>
      </main>

    </>
  )
}

export default Telefon