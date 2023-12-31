import React from 'react'
//Import Image
import Sumka from "../image/Sumka.png"
import Nuqta from "../image/Nuqta.svg"
// import SearchImg from "../image/iconSearch.svg"
// import IconArrow from "../image/iconArrow.svg"

{/* <div className={`${styles.HeaderContainer}`}>
<div className='flex'>
<img className='bg-black p-2 px-3 cursor-pointer' src={SearchImg} alt="SearchImg" />
<div className='flex'>
<input type="text" className='  border border-black p-2  w-[1180px]  focus:outline-none focus:border-blue-500' placeholder='Matn kiriting'/>
</div>
<img className='cursor-pointer' src={IconArrow} alt="iconArrow" />
</div>
</div> */}



//import
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles"

const Bag = () => {
  return (
    <>
<header className={`${styles.HeaderContainer}`} >
  <div className='flex justify-between'>
    <div>
    <img src={Sumka} alt="Sumka" />
    </div>

    <div>
    <div className='flex items-center space-x-3 pt-[10%]'>
           <NavLink to= "/" className="text-gray-600 font-semibold">Glavnaya</NavLink>
              <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
              <NavLink className="text-gray-600 font-semibold" to="/sotish/shveytsariya_soatlari">
                  Sotish
                </NavLink>
              <img style={{ width: '5px', height: '5px' }} src={Nuqta} alt="nuqtaImage" />
              <p className='text-black font-semibold'>Sumkalar</p>

              <div>
            <p>Получить наличные за 30 минут</p>
              </div>
            </div>
    </div>
  </div>

</header>
    </>
  )
}

export default Bag