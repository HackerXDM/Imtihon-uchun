import React from 'react'
import { Link, NavLink } from "react-router-dom";

// import image
import Nuqta from "../image/Nuqta.svg"
import SearchImg from "../image/iconSearch.svg"
import IconArrow from "../image/iconArrow.svg"

//import syles
import { styles } from "../styles"

const YetkazibBerishVaKafolat = () => {
  return (
    <>
      <header className={`${styles.container}`}>
        <div>
          {/* Link */}
          <div className='flex items-center space-x-3'>
            <NavLink to="/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink className="text-gray-600 font-semibold" to="/sotish/shveytsariya_soatlari">
              Sotish
            </NavLink>
            <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
            <NavLink to="/kompaniya_haqida/yetkazib_berish_va_kafolat" className='text-black font-semibold'>Yetkazib berish va kafolat</NavLink>
          </div>

          {/* List-style */}
          <ul>
            <li>
              <h2 className='uppercase text-3xl pb-2 pt-10'>Shveytsariya SOATLARINI TA'MIRLASH</h2>
              <p>Soatingiz aniq va chiroyli bo'lishini ta'minlash uchun soat lombardi - Taymer qo'l soatlarini ta'mirlash va tiklash bo'yicha xizmatlarni taqdim etadi.
                Biz qimmatbaho shveytsariyalik soatlarni ta'mirlash va texnik xizmat ko'rsatish bo'yicha ixtisoslashtirilgan servis markazi - <span className='underline text-green-500'>"REPASSAGENAYA"</span>  bilan hamkorlik qilamiz. Biz mashhur
                <span className='text-green-500 underline ml-5'>brendlarning</span>  hashamatli qo'l soatlariga ixtisoslashganmiz. Agar soatingizga texnik xizmat ko'rsatish kerak bo'lsa, tafsilotlarni veb-saytda tekshirishingiz mumkin.</p>
            </li>
            <li>
              <h3 className='text-2xl pb-3 pt-10'>Наша специализация</h3>
              <p>Сертифицированные специалисты компании осуществляют полный комплекс мероприятий, которые могут понадобиться для восстановления внешнего вида и работоспособности часов</p>
            </li>
            <li>
              <h3 className='text-2xl pb-3 pt-10'>Замену батарейки</h3>
              <p>В тонкие механизмы дорогих часов не стоит вмешиваться без специализированных знаний и навыков. Иначе даже такая простая, на первый взгляд, операция может закончиться серьезными повреждениями. Так же разборка корпуса может повлечь за собой лишение гарантии. Наш специалист быстро заменит источник питания прямо на ваших глазах.</p>
            </li>
            <li>
            <h3 className='text-2xl pb-3 pt-10'>Замена ремегка или браслета</h3>
            <p>Мы можем установить оригинальный ремешок любого производителя. В наличии всегда большой выбор ремешков: металлические, кожаные, резиновые, матерчатые. Так же вы можете выбрать нужный ремешок по каталогу и мы закажем его. В этом случае доставка займет около 1-2 недель.</p>
            </li>
          </ul>
          <div className='py-10'>
          <li>Полировка корпуса</li>
          <li>Полировка стекла часов</li>
          <li>Ремонт и реставрацию часового механизма</li>
          <li>Стоимость ремонта часов</li>
          </div>
          <div>
          <ol>1. Полировка корпуса</ol>
          <ol>2. Полировка стекла часов</ol>
          <ol>3. Ремонт и реставрацию часового механизма</ol>
          <ol>4. Стоимость ремонта часов</ol>
          </div>
          <p className='pt-5 pb-32'>‘Мы можем установить оригинальный ремешок любого производителя. В наличии всегда большой выбор ремешков: металлические, кожаные, резиновые, матерчатые. Так же вы можете выбрать нужный ремешок по каталогу и мы закажем его. В этом случае доставка займет около 1-2 недель.’</p>
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
      </header>
    </>
  )
}

export default YetkazibBerishVaKafolat