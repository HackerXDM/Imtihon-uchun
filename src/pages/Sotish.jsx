import React from 'react'

//import Image
import TimerImg from "../image/Timer_Img.svg"
import HeaderSwatch from "../image/HeaderSwatch.png"
import GreenTime from "../image/GreenTime.png"
import HandTime from "../image/HandTime.png"
import TimerHand from "../image/TimerHand.png"
import Block from "../image/Block.png"
import MoneyLight from "../image/money-light.png"
import BigHandTimer from "../image/BighandTimer.png"
import BrotherImage from "../image/BrotherImage.png"
import SoatSectionBirinchiPage from "../image/soatSectionBirinchiPage.png"
import SumkaSectionBirinchiPage from "../image/sumkaSectionBirinchiPage.png"
import Image1SectionBirinchiPage from "../image/imagebirinchisectionpage.png"   
import image2SectionBirinchiPage from "../image/imageikkinchisectionpage.png"
import Diamond from "../image/diamond.png"
import SkaletonWatch from "../image/SkaletonWatch.png"
import RoundClock from "../image/RoundClock.png"
import RightPointer from "../image/RightPointerIcon.svg"
import OtaRasm from "../image/Ota.svg"

//import syles
import { styles } from "../styles"

const Sotish = () => {
  return (
    <>
    {/* Header */}
    <header className="bg-gray-300 py-5">
        <div>
          <div className='flex justify-between'>
            <div className={`${styles.HeaderContainer}`} >
              <h2>Shveytsariya soatlarini narxining 90% ga soting</h2>
              <button>Soat bahosini oling</button>
              <ul>
                <li className='flex'>
            <img src={Block} alt="Block" />
            <p>Pul 2 qo'llashdan keyin soat</p>
                </li>

                <li className='flex'>
            <img src={HandTime} alt="HandTime" />
            <p>Huquqiy tranzaktsiyaning tozaligi</p>
                </li>

                <li className='flex'>
            <img src={MoneyLight} alt="Moneylight" />
            <p>bilan ishlaymiz 2004 yil</p>
                </li>
              </ul>
            </div>

            <div>
              <img width={600} src={HeaderSwatch} alt="HeaderLogo" />
            </div>
          </div>
        </div>
      </header>

            
          


      {/* Hero   */}
      <div className="hero">
  <div className={`${styles.HeaderContainer}`}>
    <div className='text-center'>
      <h2 className='font-semibold text-4xl py-5'>Tovarlar mavjud</h2>
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
          <div className="flex items-center justify-between py-5">
            <li className='w-full flex justify-center items-center'>
              <img src={TimerImg} alt="Timer.logo" style={{ width: '200px', height: '100px' }} />
            </li>
          </div>
          <li className='w-[70%] text-center ml-[15%] leading-6 font-serif pb-16 ' style={{ letterSpacing: '2px' }}>
            <span>Sifatli markali zargarlik buyumlarini
              sotib olishingiz yoki sotishingiz, shuningdek,  soatlar yoki
              zargarlik buyumlari uchun kredit olishingiz mumkin bo'lgan joy.</span>
          </li>
          <div className="flex items-center justify-between py-5">
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
        <ul className="grid grid-cols-4 gap-4 p-5">
          <li className='border-2 border-slate-800 p-5'>
            {/* card-1 */}
            <p className='text-6xl'>1</p>
            <p className='font-medium pt-2 text-2xl'>Ilova</p>
            <p className='py-5'>Siz veb-saytda ariza to'ldiring yoki bizga qo'ng'iroq qiling</p>
            <button className='border-2 border-slate-800 p-5 py-3 px-12'>Soat bahosini oling</button>
          </li>
          {/* card-2 */}
          <li className='border-2 border-slate-800 p-5 '>
            <p className='text-6xl'>2</p>
            <p className='font-medium pt-2 text-2xl'>Baho</p>
            <p className='py-5'>Biz aksessuarni dastlabki baholashni o'tkazamiz va siz bilan narxni kelishib olamiz</p>
          </li>
          {/* card-3 */}
          <li className='border-2 border-slate-800 p-5 '>
            <p className='text-6xl'>3</p>
            <p className='font-medium pt-2 text-2xl'>Oflayn tekshiruv</p>
            <p className='py-5'>Sizning huzuringizda soat lombardimizda soatni tekshiramiz.
              Agar kerak bo'lsa, bizning mutaxassisimiz Moskvaga borishi mumkin.</p>
          </li>
          {/* card-4 */}
          <li className='border-2 border-slate-800 p-5 '>
            <p className='text-6xl'>4</p>
            <p className='font-medium text-2xl py-2'>Siz pulni naqd yoki o'tkazma yo'li bilan olasiz</p>
            <p className='py-2'>Siz kelishilgan miqdorni joyida naqd olasiz. Yoki biz kartaga yoki hisob raqamiga pul o'tkazamiz.</p>
          </li>
        </ul>
        {/* BigImage */}
        <div className="image">
  <img src={BigHandTimer} alt="TimerImage" />
</div>
      </main>

{/* Swipper-wrapper */}
<div className="swipper-wrapper my-60 bg-blue-gray-50 h-96">
    <div className={`${styles.HeaderContainer}`} >
      <div className=' flex justify-between items-center p-10'>
    <h2 className='text-2xl font-semibold font-serif'>Mijozlarimizning  sharhlari</h2>
    <button className='border-2 border-black py-2 px-3'>Hammasini ko'rish</button>
      </div>
<div className='flex space-x-5'>
  {/* 1-kard */}
      <div className='bg-white w-60 h-56 rounded-md py-10'>
      <h3 className='p-5 text-center'>“I love creating new think every single days so let’s do it 
        together it was wonderful to work with you.”</h3>
         <div className='flex items-center space-x-2 p-5'>
        <img src={OtaRasm} alt="Image" />
        <p className='text-blue-gray-500 font-bold'>-Taro Zizo</p>
         </div>
      </div>
 {/* 2-kard */}
 <div className='bg-white w-60 h-56 rounded-md py-10'>
      <h3 className='p-5 text-center'>“I love creating new think every single days so let’s do it 
        together it was wonderful to work with you.”</h3>
         <div className='flex items-center space-x-2 p-5'>
        <img src={OtaRasm} alt="Image" />
        <p className='text-blue-gray-500 font-bold'>-Taro Zizo</p>
         </div>
      </div>
      {/* 3-kard */}
      <div className='bg-white w-60 h-56 rounded-md py-10'>
      <h3 className='p-5 text-center'>“I love creating new think every single days so let’s do it 
        together it was wonderful to work with you.”</h3>
         <div className='flex items-center space-x-2 p-5'>
        <img src={OtaRasm} alt="Image" />
        <p className='text-blue-gray-500 font-bold'>-Taro Zizo</p>
         </div>
      </div>
      {/* 4-kard */}
      <div className='bg-white w-60 h-56 rounded-md py-10'>
      <h3 className='p-5 text-center'>“I love creating new think every single days so let’s do it 
        together it was wonderful to work with you.”</h3>
         <div className='flex items-center space-x-2 p-5'>
        <img src={OtaRasm} alt="Image" />
        <p className='text-blue-gray-500 font-bold'>-Taro Zizo</p>
         </div>
      </div>
      {/* 5-kard */}
      <div className='bg-white w-60 h-56 rounded-md py-10'>
      <h3 className='p-5 text-center'>“I love creating new think every single days so let’s do it 
        together it was wonderful to work with you.”</h3>
         <div className='flex items-center space-x-2 p-5'>
        <img src={OtaRasm} alt="Image" />
        <p className='text-blue-gray-500 font-bold'>-Taro Zizo</p>
         </div>
      </div>
</div>
    </div>
</div>

{/* Img And Text */}
<div className={`${styles.HeaderContainer}`} >
<div className='flex py-5'>
  <div>
    <h3 className='font-medium text-4xl pt-28 pb-7'>Onlayn - baholash</h3>
    <p className='max-w-[1290px] leading-6'>
      Mahsulotning narxi haqida ma'lumot olish uchun Timer ofisiga
      shaxsan tashrif buyurish shart emas. Veb-saytda siz ekspress
      baho olish uchun fikr-mulohaza shaklini to'ldirishingiz mumkin
    </p>
  </div>
  <div className='flex flex-col items-center'>
    <img src={BrotherImage} className='border-2 border-blue-400' style={{ width: '1900px', height: '600px' }} alt="BrotherImage" />
    <div className="mt-5">
      <button className='border-2 border-black py-2 px-3'>Pastdagi ma'lumot</button>
    </div>
  </div>
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
<input type="text" className='  border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' placeholder='Matn kiriting'/>
      </main>
    </>

  )
}

export default Sotish
