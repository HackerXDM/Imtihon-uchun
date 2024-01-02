import React from 'react'
//Import image
import RectangleImg from "../image/RectangleImg.png"
import CarImage from "../image/CarImage.png"
import Rasm from "../image/Rasm.png"
import RasmIkki from "../image/RasmIkki.png"
import RasmUch from "../image/RasmUch.png"
import RasmTort from "../image/RasmTort.png"
import RasmBesh from "../image/RasmBesh.png"
import RasmOlti from "../image/RasmOlti.png"
import RasmYetti from "../image/RasmYetti.png"
import RasmSakkiz from "../image/RasmSakkiz.png"
import RasmToqqiz from "../image/RasmToqqiz.png"
import RasmOn from "../image/RasmOn.png"
import RasmOnBir from "../image/RasmOnBir.png"
import HandTime from "../image/HandTime.png"
import Block from "../image/Block.png"
import MoneyLight from "../image/money-light.png"

//import syles
import { styles } from "../styles"
//import
import { Link, NavLink } from "react-router-dom";
import Sumka from "../image/Sumka.png"
import Nuqta from "../image/Nuqta.svg"

const ZargarlikBuyumlari = () => {
  return (
    <>
      <header className='bg-gray-100'>
        <div className='flex space-x-16'>
          <div>
            <img src={RectangleImg} alt="RectangleImg" />
          </div>
          <div>
            <div className='flex items-center w-[400px] space-x-3 pt-[10%]'>
              <NavLink to="/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
              <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
              <NavLink className="text-gray-600 font-semibold" to="/sotish/shveytsariya_soatlari">
                Sotish
              </NavLink>
              <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
              <NavLink to="/sotish/shveytsariya_soatlari/Brendni_sotib_olish" className='text-black font-semibold'>Shveytsariya soatlari</NavLink>
            </div>
            <p className='text-5xl max-w-lg py-10'>30 daqiqada naqd pul oling</p>
            <div className='flex items-center w-[400px] space-x-2'>
              <img src={Block} alt="Block" />
              <p>To'lov darhol joyida</p>
            </div>
            {/* 2-div */}
            <div className='flex items-center w-[400px] space-x-2 py-8'>
              <img src={HandTime} alt="Block" />
              <p>Arizalarni qabul qilish 24 soat</p>
            </div>

            {/* 3-div */}
            <div className='flex items-center w-[400px] space-x-2'>
              <img src={MoneyLight} alt="Block" />
              <p>Onlayn baholash bepul</p>
            </div>
          </div>
        </div>

      </header>

      {/* SECTION */}
      <section class="flex justify-center ">
        <div class="flex py-10 space-x-52">
          {/* <!-- 1-div --> */}
          <div class="flex items-center ml-40 space-x-5">
            <div>
              <img src={Block} alt="Block" />
            </div>
            <div>
              <p>Pul allaqachon kiritilgan 2</p>
              <p>Qo'llashdan keyin soat</p>
            </div>
          </div>
          {/* <!-- 2-div --> */}
          <div class="flex items-center  justify-center space-x-5">
            <div>
              <img src={HandTime} alt="Block" />
            </div>
            <div>
              <p>Huquqiy</p>
              <p>Tranzaktsiyaning tozaligi</p>
            </div>
          </div>
          {/* <!-- 3-div --> */}
          <div class="flex items-center w-[400px] space-x-5">
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
        <div className='grid grid-cols-2 items-center space-x-24'>
          <div>
            <img src={CarImage} alt='carImage' style={{ width: '3600px', height: '700px' }} />
          </div>
          <div className='leading-6 w-[480px] font-serif'>
            <h3 className='text-4xl'>Zargarlik va oltin sotib</h3>
            <h3 className='text-4xl py-2'>olish</h3>
            <p className='text-base'>Qimmatbaho toshlardan yasalgan oltin zargarlik buyumlari foydali va ishonchli sarmoya bo'lib, doimiy ravishda o'sib borayotgan birja kurslari bilan pulingizni tejashga yordam beradi. Oltin va olmoslar ancha barqaror va ularning qiymati vaqt o'tishi bilan juda kam o'zgaradi.</p>
            <p className='py-2 text-base'>Ammo, agar sizga zudlik bilan "haqiqiy" pul kerak bo'lsa va siz oltin va kumushdan tayyorlangan mahsulotlarni sotishga harakat qilsangiz, bu muammo ekanligini bilib olasiz: o'zingiz xaridor qidirib, sotuvchilar bilan shubhali shartnomalar tuzishingiz va buzilish xavfini tug'dirishingiz kerak. bitimlar to'g'risidagi qonunlar. Siz zargarlik buyumlarini faqat zargarlik buyumlari sifatida tezda sotishingiz mumkin - mahsulotning standart va badiiy qiymatidan qat'i nazar, minimal narx va metallning haqiqiy og'irligi.</p>
            <p className='text-base'>Zargarlik buyumlarini tez, qonuniy va qulay narxda sotishning muqobil usuli bormi?</p>
          </div>
          <div>
            <div>
            <h3 className='text-[33px] py-5 font-serif'>Zargarlik buyumlarini tezda sotib olish</h3>
            <li className='w-[500px] font-serif text-lg'>Zargarlik lombardi "Taymer" Moskva va Moskva viloyatida oltin va kumush 585, 750, 850, 999 zargarlik buyumlarini tezda sotib olishni taklif qiladi.</li>
            <li className='w-[500px] font-serif text-lg'>Biz to'liq qonuniy va Rossiya Federatsiyasi qonunchiligiga muvofiq ishlaymiz va bitimlar zargarlik buyumlarini sotib olish bo'yicha qabul qilingan qoidalar doirasida tuziladi.</li>
            </div>
            <div>
              <h3 className='pb-2 pt-7 text-2xl'>Biz sizdan sotib olishga tayyormiz:</h3>
              <li>Uzuklar</li>
              <li>Bilakuzuklar (Cartier, Baraka, Nialaya, tabiiy tosh, erkaklar va ayollar);</li>
              <li>Broshlar;</li>
              <li>Запонки - De Grisogono (Грисогоно), Dupont (Дюпонт), Cartier (Картье), Chaumet (Шомэ), Chopard (Шопард), Patek Philippe (Патек Филип), Vacheron Constantin (Вашерон), Rolex (Ролекс), Montegrappa (Монтеграппа) va boshq.;</li>
              <li>Zajigalkalar (Montegrappa, Waterman, Montblanc, Cartier);</li>
              <li>Qalamlar (Montegrappa, Waterman, Mont Blanc, Cartier va boshqalar);</li>
              <li>zargarlik soatlari modellari;</li>
              <li>Tiaralar, marjonlarni;</li>
              <li>Olmoslar.</li>
            </div>
          </div>
          <div>
            <img src={Rasm} alt="Rasm" />
          </div>
          {/* Grid */}
        </div>
      </main>
      <section className={`${styles.HeaderContainer}`}>
        <div >
          <h2 className='text-center pb-5 pt-24 text-3xl'>Biz sotib olishni taklif qilamiz:</h2>
          <div className='flex flex-wrap justify-center'>
              {/* kard-1 */}
            <div className='flex items-center w-[400px] bg-gray-100 space-x-5 px-2 '>
              <div>
              <img src={RasmIkki} alt="RasmIkki" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Uzuklar</h3>
                <p>Erkaklar va ayollar uchun</p>
              </div>
            </div>
            {/* kard-2 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 '>
              <div>
              <img src={RasmUch} alt="RasmUch" />
              </div>
              <div>
            <h3 className='text-xl my-2 font-bold'>Broshlar</h3>
            <p>Tabiiy toshdan yasalgan</p>
              </div>
            </div>

            {/* kard-3 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 bg-gray-200'>
              <div>
              <img src={RasmTort} alt="RasmTort" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Zargarlik modellari</h3>
                <h3>soat</h3>
              </div>
            </div>

            {/* kard-4 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 '>
              <div>
              <img src={RasmBesh} alt="RasmBesh" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Zanjirlar</h3>
                <p>Erkaklar va ayollar uchun</p>
              </div>
            </div>

            {/* kard-5 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 bg-gray-200'>
              <div>
              <img src={RasmOlti} alt="RasmOlti" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Qo'l tugmalari</h3>
                <p>Zargarlik buyumlari. Tabiiy toshdan yasalgan</p>
              </div>
            </div>

            {/* kard-6 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 '>
              <div>
              <img src={RasmYetti} alt="RasmYetti" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Tiaralar, marjonlarni</h3>
                <p>Tabiiy toshdan yasalgan</p>
              </div>
            </div>

            {/* kard-7 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 bg-gray-200'>
              <div>
              <img src={RasmSakkiz} alt="RasmSakkiz" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Bilakuzuklar</h3>
                <p>Erkaklar va ayollar uchun tabiiy tosh</p>
              </div>
            </div>

            {/* kard-8 */}
            <div className='flex items-center w-[400px] space-x-5 px-3 p-5 '>
              <div>
              <img src={RasmToqqiz} alt="RasmToqqiz" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Zajigalkalar</h3>
                <p>Mashhur brendlar</p>
              </div>
            </div>

            {/* kard-9 */}
            <div className='flex items-center w-[400px] space-x-12 px-3 p-5 bg-gray-200'>
              <div>
              <img className='ml-3' src={RasmOn} alt="RasmOn" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Olmoslar</h3>
                <p>Va qimmatbaho toshlar bilan mahsulotlar</p>
              </div>
            </div>


            {/* kard-10 */}
            <div className='flex items-center w-[400px] p-5 space-x-5 bg-gray-200  grid-span-3 self-center'>
              <div>
              <img src={RasmOnBir} alt="RasmOnBir" />
              </div>
              <div>
                <h3 className='text-xl my-2 font-bold'>Qalamlar</h3>
                <p>Qimmatbaho metallar yoki toshlar bilan bezatilgan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ZargarlikBuyumlari