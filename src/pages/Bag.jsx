import React from 'react'
//Import Image
import Sumka from "../image/Sumka.png"
import Nuqta from "../image/Nuqta.svg"
import RectangleImg from "../image/RectangleImg.png"
import Block from "../image/Block.png"
import HandTime from "../image/HandTime.png"
import MoneyLight from "../image/money-light.png"
import Christian from "../image/Christian.png"
import TimerImg from "../image/TimerImg.svg"
import GlobalBir from "../image/GlobalBir.png"
import GlobalIkki from "../image/GlobalIkki.png"
import GlobalUch from "../image/GlobalUch.png"
import GlobalBesh from "../image/GlobalBesh.png"
import GlobalOlti from "../image/GlobalOlti.png"
import GlobalYetti from "../image/GlobalYetti.png"
import GlobalSakkiz from "../image/GlobalSakkiz.png"
import GlobalToqqiz from "../image/GlobalToqqiz.png"
import GlobalOn from "../image/GlobalOn.png"
import QabulBir from "../image/QabulBir.png"
import QabulIkki from "../image/QabulIkki.png"
import QabulUch from "../image/QabulUch.png"
import QabulTort from "../image/QabulTort.png"
import QabulBesh from "../image/QabulBesh.png"
import QabulOlti from "../image/QabulOlti.png"
import TaymerBir from "../image/TaymerBir.png"
import TaymerIkki from "../image/TaymerIkki.png"
import FrameAvfzalliklar from "../image/FrameAvfzalliklar.svg"
import MoneyLightAvfzalliklar from "../image/MoneylightAvfzalliklar.svg"
import Car from "../image/CarAvfzalliklar.svg"
import Diamond from "../image/diamond.png"
import RightPointer from "../image/RightPointerIcon.svg"
import SkaletonWatch from "../image/SkaletonWatch.png"
import RoundClock from "../image/RoundClock.png"
import SearchImg from "../image/iconSearch.svg"
import IconArrow from "../image/iconArrow.svg"

//import
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles"

const Bag = () => {
  return (
    <>
      <header className='bg-gray-100'>
        <div className={`${styles.HeaderContainer}`}>
          <div className='flex space-x-36'>
            <div className='pt-20'>
              <img src={Sumka} alt="Sumka" />
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
          <div class="flex items-center">
            <div>
              <img src={Block} alt="Block" />
            </div>
            <div>
              <p>Pul allaqachon kiritilgan 2</p>
              <p>Qo'llashdan keyin soat</p>
            </div>
          </div>
          {/* <!-- 2-div --> */}
          <div class="flex items-center">
            <div>
              <img src={HandTime} alt="Block" />
            </div>
            <div>
              <p>Huquqiy</p>
              <p>Tranzaktsiyaning tozaligi</p>
            </div>
          </div>
          {/* <!-- 3-div --> */}
          <div class="flex items-center">
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
            <img src={Christian} alt="Christian" style={{ width: '740px', height: '600px' }} />
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
        <div className=' '>
          <h3 className='text-center w-[1000px] ml-[17%] pb-5 pt-20 text-2xl'>Biz taniqli global ishlab chiqaruvchilardan original sumkalarni (yangi va ishlatilgan) sotib olamiz:</h3>
          <div className='flex items-center space-x-10 px-36'>
            <img src={GlobalBir} alt="rasm" />
            <img src={GlobalIkki} alt="rasm" />
            <img src={GlobalUch} alt="rasm" />
            <img src={GlobalBesh} alt="rasm" />
            <img src={GlobalOlti} alt="rasm" />
            <img src={GlobalYetti} alt="rasm" />
            <img src={GlobalSakkiz} alt="rasm" />
            <img src={GlobalToqqiz} alt="rasm" />
            <img src={GlobalOn} alt="rasm" />
          </div>
        </div>
      </main>


      {/* Grid and image */}
      <div className={`${styles.HeaderContainer}`}>
        <div className='pb-5 pt-20'>
          <h3 className='text-center text-3xl py-5'>Biz sotib olish uchun qabul qilamiz:</h3>
          <div className='grid grid-cols-3 p-5'>
            <div className='flex items-center  space-x-5 bg-gray-100 p-5'>
              <img src={QabulBir} alt="rasm" />
              <p>Hamyon</p>
            </div>
            <div className='flex items-center space-x-5 '>
              <img className='ml-8' src={QabulIkki} alt="rasm" />
              <p>Ryukzaklar</p>
            </div>
            <div className='flex items-center space-x-5 p-5 bg-gray-100'>
              <img src={QabulUch} alt="rasm" />
              <p>Hamyonlar</p>
            </div>
            <div className='flex items-center space-x-5'>
              <img src={QabulTort} alt="rasm" />
              <p>Debriyajlar</p>
            </div>
            <div className='flex items-center space-x-5 bg-gray-100 p-5'>
              <div>
                <img src={QabulBesh} alt="rasm" style={{ width: '100px', height: '80px' }} />
              </div>
              <div>
                <p className='text-xl font-medium'>Sumkalar</p>
                <p className='w-[200px] font-serif'>Haqiqiy teridan qilingan, qimmatbaho toshlar va materiallar bilan bezatilgan</p>
              </div>
            </div>
            <div className='flex items-center  space-x-4 p-5'>
              <img src={QabulOlti} alt="rasm" />
              <p>Portfellar</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className={`${styles.HeaderContainer}`}>
        <ul>
          <div className="flex items-center justify-between py-5 pt-20">
            <li className='w-full flex justify-center items-center'>
              <img src={TimerImg} alt="Timer.logo" style={{ width: '200px', height: '100px' }} />
            </li>
          </div>
          <li className='w-[70%] text-center ml-[15%] leading-6 font-serif pb-16 ' style={{ letterSpacing: '2px' }}>
            <span>Sifatli markali zargarlik buyumlarini
              sotib olishingiz yoki sotishingiz, shuningdek,  soatlar yoki
              zargarlik buyumlari uchun kredit olishingiz mumkin bo'lgan joy.</span>
          </li>
        </ul>
        <div className="flex items-center justify-between py-5">
          <div className='w-full flex justify-center items-center'>
            <h3 className='text-4xl'>Nima uchun "Taymer"?</h3>
          </div>
        </div>
        <div className='w-[70%] text-center ml-[15%]  font-serif '>
          <span>"Taymer" zargarlik lombardi poytaxt bozorida 17 yil, Moskva va Moskva viloyatida 9 ta xarid qilish markazlari, shuningdek, sizga quyidagilar bilan ta'minlaydigan professional baholovchilar guruhiga ega:</span>
        </div>
        <div className={`${styles.HeaderContainer}`}>
          <ul className="grid grid-cols-3  p-5 leading-6 font-serif">
            {/* card-1 */}
            <li>
              <div>
                <img src={TaymerBir} alt="ImageTime" />
              </div>
            </li>
            {/* card-2 */}
            <li className='text-center pt-11 p-3'>
              <img className='ml-[45%] py-5 filter brightness-150' src={FrameAvfzalliklar} alt="HandTime" />
              <span className=' text-4xl  font-mono'>Yangi soat narxining 98% gacha olasiz</span>
            </li>
            {/* card-3 */}
            <li>
              <img src={TaymerIkki} alt="TimerHand" />
            </li>
            {/* card-4 */}
            <li className='text-center'>
              <img className='ml-[45%] pt-10' src={MoneyLightAvfzalliklar} alt="BlockImage" />
              <span className='text-3xl font-mono py-4 inline-block'>Siz pulingizni darhol naqd olasiz</span>
            </li>
            {/* card-5 */}
            <li className='text-center py-10 bg-black text-white '>
              <div className='flex justify-center'>
                <img src={Car} alt="car_img" />
              </div>
              <span className='py-4 inline-block'>ROLEX, AUDEMARS PIGUET, PATEKPHILLIPE,
                A.LANGE & SOHNE,BLANCPAIN, BREGUET, CARTIER,CHOPARD,
                CORUM, FRANCK MULLER,GIRARD PERREGAUX, GRAHAM, IWC,JAEGER-LECOULTRE,
                RICHARD MILLE,VACHERON CONSTANTIN, HUBLOT,GREUBEL FORSEY</span>
            </li>
            {/* card-6 */}
            <li className='text-center py-10'>
              <img className='ml-[45%] pb-5' src={MoneyLightAvfzalliklar} alt="BlockImage" />
              <span className='text-3xl'>Pull allaqachon berilgan <br /> qo`llashdan 2soat avval</span>
              <br />
              <p className='pt-2'>Atigi 5 daqiqadan so'ng biz bepul baholashni o'tkazamiz va sizga oladigan narxni aytamiz.</p>
              <br />
              <p>Biz ko'plab hujjatlarni to'ldirishimiz va tasdiqlovchi hujjatlarni taqdim etishimiz kerak</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Grid and card */}
      <main className={`${styles.HeaderContainer} font-serif`}>
        <div className='text-center'>
          <h3 className='font-semibold text-3xl pt-28'>Maqollar</h3>
          <p className='text-gray-600 pt-3 pb-5'>Hashamatli zargarlik buyumlari haqida taymer</p>
        </div>
        <ul className='grid grid-cols-3 gap-4 p-5'>
          <li className=' border-b-2'>
            <img src={Diamond} alt="diamonImage" />
            <span className='py-3 inline-block font-semibold'>Olmos bahosi: zargarlik buyumining sifatini qanday tekshirish mumkin?</span>
            <p>Zargarlik sifatini tekshirish va olmosni qanday baholash mumkin? Biz bu haqda Timer
              tomosha markazining blogida gaplashamiz.</p>
            <div className='flex justify-between items-center pb-5 pt-[57px]'>
              <p>28 May 2020</p>
              <img src={RightPointer} alt="PointerIcom" />
            </div>
          </li>
          <li className=' border-b-2'>
            <img src={SkaletonWatch} alt="skeleton watch" />
            <span className='py-3 inline-block font-semibold'>Dunyodagi eng qimmat soatlar TOP 10 taligi</span>
            <p>Dunyodagi eng qimmat soatlar TOP 10 taligi. Taymerni kuzatish markazi blogi.</p>
            <div className='flex justify-between pb-5 items-center pt-[103px]'>
              <p>28 May 2020</p>
              <img src={RightPointer} alt="PointerIcom" />
            </div>
          </li>
          <li className='border-b-2'>
            <img src={RoundClock} alt="round clock" />
            <span className='font-semibold py-3 inline-block'>Soatlarda takrorlagichlar nima?</span>
            <p>Yaxshi Shveytsariya repetitor soati qimmat narsa. Ammo bu holatning haqiqiy ko'rsatkichidir. Ko'p odamlar "takrorlovchi soat" iborasini eshitgan bo'lishi
              mumkin. Lekin bu qanday soat? Repetitor nima va u nima uchun kerak?..</p>
            <div className='flex justify-between pb-5 items-center pt-8'>
              <p>28 May 2020</p>
              <img src={RightPointer} alt="PointerIcom" />
            </div>
          </li>
        </ul>
        <div className='text-center py-5'>
          <button className='px-32 py-3 bg-black text-white'>Barcha maqolalar</button>
        </div>
        <div>
          <div>
            <div className='flex'>
              <img className='bg-black p-2 px-3 cursor-pointer' src={SearchImg} alt="SearchImg" />
              <div className='flex'>
                <input type="text" className='  border border-black p-2  w-[1100px]  focus:outline-none focus:border-blue-500' placeholder='Matn kiriting' />
              </div>
              <img className='cursor-pointer py-2 px-3' src={IconArrow} alt="iconArrow" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Bag