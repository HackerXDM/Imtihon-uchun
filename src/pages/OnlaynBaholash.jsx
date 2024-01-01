import React from 'react'

//import image
import Girl from "../image/GirlImage.png"
import AvfzalliklarKardImgOne from "../image/AvfzalliklarKardImg.png"
import FrameAvfzalliklar from "../image/FrameAvfzalliklar.svg"
import AvfzalliklarKardImgTwo from "../image/AvfzalliklarKardImgIkki.png"
import Car from "../image/CarAvfzalliklar.svg"
import Block from "../image/image-index.jpg"
import MoneyLightAvfzalliklar from "../image/MoneylightAvfzalliklar.svg"
import { IndeterminateCheckBox, InstallDesktopSharp } from '@mui/icons-material'

//import syles
import { styles } from "../styles"

const OnlaynBaholash = () => {
  return (
    <>
      <header>
        <div className='flex'>
          <div>
            <img style={{ width: '2000px', height: '400px' }} src={Girl} alt="GirlImage" />
          </div>
          <div className='p-10'>
            <span className='text-4xl font-medium font-serif'>Aksessuarlarni onlayn</span>
            <br />
            <span className='text-4xl font-medium font-serif'> Baholash</span>
            <p className='text'>Shveytsariya qo'l soatlarining dastlabki narxini bilish uchun ushbu sahifadagi shaklni to'ldirishingiz mumkin.
              Yuqori sifatli fotosuratlarning mavjudligi xarajatlarni aniqlashni aniqroq qiladi - 95% gacha.</p>
          </div>
        </div>
        <div className='text-center text-xl leading-8 font-serif w-full max-w-[1180px] mx-auto px-5'>
          <p>Xronograflaringizning haqiqiy qiymatini bilish uchun siz butun
            bo'ylab tajribali baholovchini izlashingiz yoki forumlarni aylanib
            chiqishingiz shart emas. Moskvadagi taymer mutaxassislari har qanday
            ishlab chiqaruvchi va modelning Shveytsariya soatlarini baholash uchun
            etarlicha malakaga ega va ko'p yillik tajribaga ega. Bundan tashqari,
            biz maxsus shaklni to'ldirish va fotosurat yuborish orqali ushbu xizmatni
            masofadan turib taqdim etamiz. Soatlarni tekshirishda shaxsiy aloqani
            afzal ko'rgan mijozlar mahsulotni Kutuzovskiy prospektidagi Timer ofisiga
            etkazib berishlari mumkin. Biz yuzaga kelishi mumkin bo'lgan har qanday
            muammo bo'yicha ma'lumot beruvchi maslahat berishdan mamnun bo'lamiz.</p>
        </div>
      </header>

      <section>
        <div className={`${styles.HeaderContainer}`}>
          <h2 className='text-center py-10 text-2xl font-medium'>Avfzalliklar</h2>
        <ul className="grid grid-cols-3  p-5 leading-6 font-serif">
          {/* card-1 */}
          <li>
            <div>
              <img src={AvfzalliklarKardImgOne} alt="ImageTime" />
            </div>
          </li>
          {/* card-2 */}
          <li className='text-center pt-11 p-3'>
          <img className='ml-[45%] py-5 filter brightness-150' src={FrameAvfzalliklar} alt="HandTime"/>
            <span className=' text-4xl  font-mono'>Yangi soat narxining 98% gacha olasiz</span>
          </li>
          {/* card-3 */}
          <li>
            <img src={AvfzalliklarKardImgTwo} alt="TimerHand" />
          </li>
          {/* card-4 */}
          <li className='text-center'>
            <img className='ml-[45%] pt-10' src={MoneyLightAvfzalliklar} alt="BlockImage" />
            <span className='text-3xl font-mono py-4 inline-block'>Siz pulingizni darhol naqd olasiz</span>
          </li>
          {/* card-5 */}
          <li className='text-center py-10 bg-black text-white '>
            <div className='flex justify-center'>
           <img src= {Car} alt="car_img" />   
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
      </section>  

      <main>
        <div className={`${styles.HeaderContainer}`}>
          <div className='text-center'>
          <span className='text-5xl py-3 inline-block'>Mahsulot uchun pul olish juda oson!</span>
        </div>
        {/* Grid */}
        <ul className="grid grid-cols-4 gap-4 p-5">
          <li className='border border-slate-800 backdrop-blur-sm z-[10] p-5 border-black'>
            {/* card-1 */}
            <p className='text-6xl'>1</p>
            <p className='font-medium pt-2 text-2xl'>Ilova</p>
            <p className='py-5'>Siz veb-saytda ariza to'ldiring yoki bizga qo'ng'iroq qiling</p>
            <button className='border border-slate-800 backdrop-blur-sm p-5 py-3 px-12 border-black'>Soat bahosini oling</button>
          </li>
          {/* card-2 */}
          <li className='border border-slate-800 backdrop-blur-sm z-[10] p-5 border-black'>
            <p className='text-6xl'>2</p>
            <p className='font-medium pt-2 text-2xl'>Baho</p>
            <p className='py-5'>Biz aksessuarni dastlabki baholashni o'tkazamiz va siz bilan narxni kelishib olamiz</p>
          </li>
          {/* card-3 */}
          <li className='border border-slate-800 backdrop-blur-sm z-[10] p-5  border-black'>
            <p className='text-6xl'>3</p>
            <p className='font-medium pt-2 text-2xl'>Oflayn tekshiruv</p>
            <p className='py-5'>Sizning huzuringizda soat lombardimizda soatni tekshiramiz.
              Agar kerak bo'lsa, bizning mutaxassisimiz Moskvaga borishi mumkin.</p>
          </li>
          {/* card-4 */}
          <li className='border border-slate-800 backdrop-blur-sm z-[10] p-5  border-black'>
            <p className='text-6xl'>4</p>
            <p className='font-medium text-2xl py-2'>Siz pulni naqd yoki o'tkazma yo'li bilan olasiz</p>
            <p className='py-2'>Siz kelishilgan miqdorni joyida naqd olasiz. Yoki biz kartaga yoki hisob raqamiga pul o'tkazamiz.</p>
          </li>
        </ul>
          <div className='flex justify-center mb-4'>
            <img className='w-[370px] mt-[-230px] ' src={Block}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default OnlaynBaholash