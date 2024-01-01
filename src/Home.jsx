import React from 'react'
import SearchImg from "./image/iconSearch.svg"
import IconArrow from "./image/iconArrow.svg"


//import Image
import SearchImage from "./image/iconSearch.svg"
import HeaderLogo from "./image/HeaderSwatch.png"
import TimerImg from "./image/TimerImg.svg"
import GreenTime from "./image/GreenTime.png"
import HandTime from "./image/HandTime.png"
import TimerHand from "./image/TimerHand.png"
import BrotherImage from "./image/BrotherImage.png"
import Block from "./image/Block.png"
import MoneyLight from "./image/money-light.png"
import BigHandTimer from "./image/BighandTimer.png"
import SoatSectionBirinchiPage from "./image/soatSectionBirinchiPage.png"
import SumkaSectionBirinchiPage from "./image/sumkaSectionBirinchiPage.png"
import Image1SectionBirinchiPage from "./image/imagebirinchisectionpage.png"
import image2SectionBirinchiPage from "./image/imageikkinchisectionpage.png"
import Diamond from "./image/diamond.png"
import SkaletonWatch from "./image/SkaletonWatch.png"
import RoundClock from "./image/RoundClock.png"
import RightPointer from "./image/RightPointerIcon.svg"

//import syles
import { styles } from "./styles"

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 ">
        <div>
          <ul>
            <div className='flex justify-between items-center'>
              <li className='pl-28'>
                <div className='leading-10 font-sans'>
                  <h2 className='text-6xl'>Shveytsariya</h2>
                  <h2 className='text-6xl'>soatlarini narxining</h2>
                  <h2 className='text-6xl'>90% ga soting</h2>
                </div>
                <div className='py-10'>
                <button className='border-2 border-black text-2xl px-10 py-2 '>Soat bahosini oling</button>
                </div>
                {/* 1-div */}
                <div className='flex items-center space-x-3 font-serif text-lg'>
                  <li>
                    <img src={Block} alt="Block" />
                  </li>
                  <li>
                    <p>Деньги уже через 2</p>
                    <p>часа после заявки</p>
                  </li>
                </div>
                {/* 2-div */}
                <div className='flex items-center space-x-3 py-5 font-serif text-lg'>
                  <li>
                    <img src={HandTime} alt="Block" />
                  </li>
                  <li>
                    <p>Деньги уже через 2</p>
                    <p>часа после заявки</p>
                  </li>
                </div>

                {/* 3-div */}
                <div className='flex items-center space-x-3 font-serif text-lg'>
                  <li>
                    <img src={MoneyLight} alt="Block" />
                  </li>
                  <li>
                    <p>Деньги уже через 2</p>
                    <p>часа после заявки</p>
                  </li>
                </div>
              </li>
              <li>
                <img className='pt-16' src={HeaderLogo} alt="HeaderLogo" style={{ width: '850px', height: '700px' }} />
              </li>
            </div>
          </ul>
        </div>
      </header>



      {/* Hero   */}
      <div className="hero">
        <div className={`${styles.HeaderContainer}`}>
          <div className='text-center'>
            <h2 className='font-semibold text-4xl pt-16 py-5'>Tovarlar mavjud</h2>
          </div>
          <ul className='flex items-center justify-center gap-3 bg-white-300'>
            <li className='w-[30%] h-[200px] bg-[#F5F3F4] overflow-hidden'>
              <div className="flex flex-col  items-center p-3">
                <span>Tomosha qiling</span>
                <img className="w-[90%] h-[90%]" src={SoatSectionBirinchiPage} alt="Timer" />
              </div>
            </li>
            <li className='w-[30%] h-[200px] bg-[#F5F3F4] overflow-hidden'>
              <div className="flex flex-col items-center p-3">
                <span>Aksessuarlar</span>
                <img className="w-[90%] h-[90%]" src={SumkaSectionBirinchiPage} alt="BagImg" />
              </div>
            </li>
            <li className='w-[30%] h-[200px] bg-[#F5F3F4] overflow-hidden'>
              <div className="flex flex-col items-center p-3">
                <span>Dekoratsiyalar</span>
                <img className="w-[90%] h-[90%]" src={Image1SectionBirinchiPage} alt="jewelry" />
              </div>
            </li>
          </ul>
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
          <div className="flex items-center justify-between pb-5">
            <li className='w-full flex justify-center items-center'>
              <span className='font-semibold text-4xl'>SEO matni - Soat sotib olish</span>
            </li>
          </div>
          <li className='w-[70%] text-center ml-[15%] leading-6 font-serif pb-16 ' style={{ letterSpacing: '2px' }}>
            <span>Soat sotib olish haqida matn so'm dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis disparturient Montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
              felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</span>
          </li>
        </ul>


        {/* Grid */}
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

      <main className={`${styles.HeaderContainer}`}>
        <div className='text-center'>
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
          <li className='border-2 border-black border-slate-800 p-5 '>
            <p className='text-6xl'>2</p>
            <p className='font-medium pt-2 text-2xl'>Baho</p>
            <p className='py-5'>Biz aksessuarni dastlabki baholashni o'tkazamiz va siz bilan narxni kelishib olamiz</p>
          </li>
          {/* card-3 */}
          <li className='border-2 border-black border-slate-800 p-5 '>
            <p className='text-6xl'>3</p>
            <p className='font-medium pt-2 text-2xl'>Oflayn tekshiruv</p>
            <p className='py-5'>Sizning huzuringizda soat lombardimizda soatni tekshiramiz.
              Agar kerak bo'lsa, bizning mutaxassisimiz Moskvaga borishi mumkin.</p>
          </li>
          {/* card-4 */}
          <li className='border-2 border-black border-slate-800 p-5 '>
            <p className='text-6xl'>4</p>
            <p className='font-medium text-2xl py-2'>Siz pulni naqd yoki o'tkazma yo'li bilan olasiz</p>
            <p className='py-2'>Siz kelishilgan miqdorni joyida naqd olasiz. Yoki biz kartaga yoki hisob raqamiga pul o'tkazamiz.</p>
          </li>
        </ul>
        {/* BigImage */}
        <div className="image">
          <img src={BigHandTimer} alt="TimerImage" />
        </div>

        {/* Img And Text */}
        <div className='flex py-5 space-x-10'>
          <div>
            <h3 className='font-medium text-4xl pt-28 pb-7'>Onlayn - baholash</h3>
            <p className='max-w-[1190px] leading-6 font-serif text-lg'>
              Mahsulotning narxi haqida ma'lumot olish uchun Timer  ofisiga
              shaxsan tashrif buyurish shart emas. Veb-saytda siz ekspress
              baho olish uchun fikr-mulohaza shaklini to'ldirishingiz mumkin</p>
          </div>
          <div>
            <img src={BrotherImage} className='border-2 border-blue-400' style={{ width: '1900px', height: '400px' }} alt="BrotherImage" />
          </div>
        </div>
      </main>

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
            <div className='flex py-5'>
              <img className='bg-black p-2 px-3 cursor-pointer' src={SearchImg} alt="SearchImg" />
              <div className='flex'>
                <input type="text" className=' p-2 border  w-[1100px]  focus:outline-none focus:border-blue-500' placeholder='Katalog qidirish' />
              </div>
              <img className='cursor-pointer p-2 px-3' src={IconArrow} alt="iconArrow" />
            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default Home
