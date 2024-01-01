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
          <div>
            <img src={Soat} alt="Christian" style={{ width: '500px', height: '600px' }} />
          </div>
          <div className='px-10'>
            <h3 className='text-3xl'>Original sotib olish</h3>
            <h3 className='text-3xl py-2'>markali sumkalar</h3>
            <p className='w-[500px] font-serif'>Agar siz qimmatbaho sumka yoki ryukzak egasi bo'lsangiz va uni tez va maksimal narxda sotmoqchimisiz? Endi vaqtni behuda sarflash va xaridorlarni o'zingiz qidirishingiz shart emas, biz sizdan Yevropa yoki Amerikada ishlab chiqarilgan elita charm sumkani 1 soat ichida sotib olishga tayyormiz!
              Bizni FAQAT 100 000 rubldan bo'lgan qimmatbaho sumkalar qiziqtiradi. va undan yuqori.
              Aksessuarlaringizni nima uchun sotayotganingiz, shuningdek, uni sotib olish tarixi biz uchun muhim emas.
              Timer sumkasi lombardi premium brendlardan ayollar va erkaklar sumkalari, debriyajlar va portfellarni sotib olishga ixtisoslashgan.
              Siz sumkani tezda sotishingiz mumkin, yangi mahsulotning 90% gacha bo'lgan narxda</p>
          </div>
        </div>
     </div>
      </main>
    </>
  )
}

export default Sotish