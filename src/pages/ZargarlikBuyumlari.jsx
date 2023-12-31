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

//import syles
import { styles } from "../styles"

const ZargarlikBuyumlari = () => {
  return (
    <>
    <img src={RectangleImg} alt="RectangleImg" />
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
        <ul>
      <li>Birinchi element</li>
      <li>Ikkinchi element</li>
      <li>Uchinchi element</li>
    </ul>
        </div>
        <div>
          <img src={Rasm} alt="Rasm" />
        </div>
        {/* Grid */}
      </div>
    </main>
        <section className={`${styles.HeaderContainer}`}>
      <div>
        <h2 className='text-center'>Biz sotib olishni taklif qilamiz:</h2>
       <div className='grid grid-cols-3'>
      <div>
        <img src={RasmIkki} alt="RasmIkki" />
      </div>
      <div>
        <img src={RasmUch} alt="RasmUch" />
      </div>
      <div>
        <img src={RasmTort} alt="RasmTort" />
      </div>
      <div>
        <img src={RasmBesh} alt="RasmBesh" />
      </div>
      <div>
        <img src={RasmOlti} alt="RasmOlti" />
      </div>
      <div>
        <img src={RasmYetti} alt="RasmYetti" />
      </div>
      <div>
        <img src={RasmSakkiz} alt="RasmSakkiz" />
      </div>
      <div>
        <img src={RasmToqqiz} alt="RasmToqqiz" />
      </div>
      <div>
        <img src={RasmOn} alt="RasmOn" />
      </div>
      <div>
        <img src={RasmOnBir} alt="RasmOnBir" />
      </div>
       </div>
      </div>
        </section>
    </>
  )
}

export default ZargarlikBuyumlari