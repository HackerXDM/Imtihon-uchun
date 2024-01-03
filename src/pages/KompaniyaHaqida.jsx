import React from 'react'

//import syles
import { styles } from "../styles"

//import image
import WaterWatch from "../image/waterWatch.png"
import Watch from "../image/Watch.png"
import Nuqta from "../image/Nuqta.svg"
import GreenTime from "../image/GreenTime.png"
import HandTime from "../image/HandTime.png"
import TimerHand from "../image/TimerHand.png"
import Block from "../image/Block.png"
import MoneyLight from "../image/money-light.png"
import BigHandTimer from "../image/BighandTimer.png"
import SearchImg from "../image/iconSearch.svg"
import IconArrow from "../image/iconArrow.svg"
import phone from "../image/phone.png"

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
        <div className='w-full max-w-7xl px-5 mx-auto pb-5'>
          <div className='flex items-center space-x-3 '>
            <NavLink to="/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink className="text-gray-600 font-semibold" to="/sotish">
              Sotish
            </NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink to="/kompaniya_haqida/yetkazib_berish_va_kafolat" className='text-black font-semibold'>Yetkazib berish va kafolat</NavLink>
          </div>
        </div>

        <ul className='grid grid-cols-2 font-serif items-center'>
          <li>
            <img style={{ width: '930px', height: '650px' }} src={WaterWatch} alt="WaterWatch" />
          </li>
          <li className='w-full max-w-xl pl-12'>
            <div className='flex items-center space-x-3 pt-[10%]'>
              <NavLink to="/kompaniya_haqida" className='text-green-600 font-semibold uppercase'>Kompaniya haqida</NavLink>
              <img style={{ width: '4px', height: '4px' }} src={Nuqta} alt="nuqtaImage" />
              <NavLink to="/kompaniya_haqida/yetkazib_berish_va_kafolat" className='text-green-600 font-semibold uppercase'> Yetkazib berish va kafolat</NavLink>
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
          <li className='px-28'>
            <div className='flex items-center space-x-3 pt-[10%]'>
              <NavLink to="/kompaniya_haqida" className='text-green-600 font-semibold uppercase'>Kompaniya haqida</NavLink>
              <img style={{ width: '4px', height: '4px' }} src={Nuqta} alt="nuqtaImage" />
              <NavLink to="/kompaniya_haqida/yetkazib_berish_va_kafolat" className='text-green-600 font-semibold uppercase'> Yetkazib berish va kafolat</NavLink>
            </div>
            <h3 className='text-4xl py-3'>Kafolat</h3>
            <p className='w-[450px]'>Katalogda taqdim etilgan barcha soatlar biz tomonidan haqiqiyligi va ishlashi uchun tekshirilgan va originaldir. Biz eskirish paytida tabiiy qarish natijasida yuzaga kelgan barcha kamchiliklarni bartaraf qilamiz. Soat tiklangan, tozalangan va sayqallangan holda mukammal holatda.
              Barcha soatlar sotib olingan kundan boshlab 1 yil kafolat bilan ta'minlanadi.
              Agar uning tashqi ko'rinishi va to'plamga kiritilgan boshqa elementlar buzilmagan bo'lsa, siz soatni 7 kun ichida qaytarishingiz mumkin.</p>
          </li>
          <li>
            <img style={{ width: '800px', height: '650px' }} src={Watch} alt="WatchImage" />
          </li>
        </ul>
      </header>

      {/* Grid and Image */}
      <section>
        <div className={`${styles.HeaderContainer}`}>
          <h2 className='text-center pb-5 pt-20 text-[42px] font-base font-serif'>Nima uchun biz bilan ishlashga arziydi?</h2>
          <ul className="grid grid-cols-3  p-5 leading-6 font-serif">
            {/* card-1 */}
            <li>
              <div>
                <img src={GreenTime} alt="ImageTime" />
              </div>
            </li>
            {/* card-2 */}
            <li className='text-center pt-5 p-3'>
              <img className='ml-[45%] py-5' src={HandTime} alt="HandTime" />
              <span className=' text-3xl font-mono'>Yuqori to'lov narxlari</span>
              <br />
              <span className='text-base '>Siz yangi soat narxining 90% gacha olasiz.
                Biz darhol naqd pul to'laymiz</span>
            </li>
            {/* card-3 */}
            <li>
              <img src={TimerHand} alt="TimerHand" />
            </li>
            {/* card-4 */}
            <li className='text-center'>
              <img className='ml-[45%] pt-10' src={Block} alt="BlockImage" />
              <span className='text-3xl font-mono py-4 inline-block'>Maxfiylik</span>
              <br />
              <span>Chronoland-dagi barcha tranzaktsiyalar anonim ekanligiga
                amin bo'lishingiz mumkin. Biz barcha tranzaksiya ma'lumotlarining
                to'liq xavfsizligini kafolatlaymiz</span>
            </li>
            {/* card-5 */}
            <li className='text-center py-10 bg-black text-white '>
              <span className='text-2xl'>Bilan ishlaymiz<br /> brendlari</span>
              <br />
              <span className='py-4 inline-block'>ROLEX, AUDEMARS PIGUET, PATEKPHILLIPE,
                A.LANGE & SOHNE,BLANCPAIN, BREGUET, CARTIER,CHOPARD,
                CORUM, FRANCK MULLER,GIRARD PERREGAUX, GRAHAM, IWC,JAEGER-LECOULTRE,
                RICHARD MILLE,VACHERON CONSTANTIN, HUBLOT,GREUBEL FORSEY</span>
              <br />
              <span className='underline underline-offset-4'>Hammasini ko'rish</span>
            </li>
            {/* card-6 */}
            <li className='text-center py-10'>
              <img className='ml-[45%] pb-5' src={MoneyLight} alt="BlockImage" />
              <span className='text-3xl'>Pull allaqachon berilgan <br /> qo`llashdan 2soat avval</span>
              <br />
              <p className='pt-2'>Atigi 5 daqiqadan so'ng biz bepul baholashni o'tkazamiz va sizga oladigan narxni aytamiz.</p>
              <br />
              <p>Biz ko'plab hujjatlarni to'ldirishimiz va tasdiqlovchi hujjatlarni taqdim etishimiz kerak</p>
            </li>
          </ul>
        </div>
      </section>

      <main className={`${styles.HeaderContainer}`}>
        <div className='text-center pt-20 pb-5'>
          <span className='text-5xl py-3 inline-block'>Mahsulot uchun pul olish juda oson!</span>
        </div>
        {/* Grid */}
        <ul className="grid grid-cols-4  gap-4 p-5">
          <li className='border-2 border-black  border-slate-800 p-5'>
            {/* card-1 */}
            <p className='text-6xl'>1</p>
            <p className='font-medium pt-2 text-2xl'>Ilova</p>
            <p className='py-5'>Siz veb-saytda ariza to'ldiring yoki bizga qo'ng'iroq qiling</p>
            <button className='border-2 border-slate-800 p-5 py-3 border-black px-12'>Soat bahosini oling</button>
          </li>
          {/* card-2 */}
          <li className='border-2 border-black backdrop-blur-[2px]	 border-slate-800 p-5 '>
            <p className='text-6xl'>2</p>
            <p className='font-medium pt-2 text-2xl'>Baho</p>
            <p className='py-5'>Biz aksessuarni dastlabki baholashni o'tkazamiz va siz bilan narxni kelishib olamiz</p>
          </li>
          {/* card-3 */}
          <li className='border-2 border-black backdrop-blur-[2px]	 border-slate-800 p-5 '>
            <p className='text-6xl'>3</p>
            <p className='font-medium pt-2 text-2xl'>Oflayn tekshiruv</p>
            <p className='py-5'>Sizning huzuringizda soat lombardimizda soatni tekshiramiz.
              Agar kerak bo'lsa, bizning mutaxassisimiz Moskvaga borishi mumkin.</p>
          </li>
          {/* card-4 */}
          <li className='border-2 border-black backdrop-blur-[2px]	 border-slate-800 p-5 '>
            <p className='text-6xl'>4</p>
            <p className='font-medium text-2xl py-2'>Siz pulni naqd yoki o'tkazma yo'li bilan olasiz</p>
            <p className='py-2'>Siz kelishilgan miqdorni joyida naqd olasiz. Yoki biz kartaga yoki hisob raqamiga pul o'tkazamiz.</p>
          </li>
        </ul>
        <div className='flex justify-center mb-4'>
            <img className='w-[320px] mt-[-130px] ' src={phone}/>
          </div>
        {/* BigImage */}
        <div className="image">
          <img src={BigHandTimer} alt="TimerImage" />
        </div>

        {/* Search */}
        <div>
          <div>
            <div className='flex py-10'>
              <img className='bg-black p-3 px-4 cursor-pointer' src={SearchImg} alt="SearchImg" />
              <div className='flex'>
                <input type="text" className='  border border-black p-2  w-[1150px]  focus:outline-none focus:border-blue-500' placeholder='Katalogni qidirish' />
              </div>
              <img className='cursor-pointer py-2 px-3' src={IconArrow} alt="iconArrow" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default KompaniyaHaqida