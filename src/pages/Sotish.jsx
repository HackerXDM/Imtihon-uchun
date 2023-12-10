import React from 'react'

//import data
import { toveryHero } from "../data/Data"

//import HeaderLogo
import HeaderLogo from "../image/HeaderLogo.png"

//import syles
import { styles } from "../styles"

const Sotish = () => {
  return (
    <>
      <header className="bg-gray-300 py-5">
        <div className={`${styles.HeaderContainer}`} >
          <div className='flex'>
            <div className='max-w-xl'>
              <h2>Shveytsariya soatlarini narxining 90% ga soting</h2>
              <button>Soat bahosini oling</button>
            </div>
            <div>
              <img width={600} src={HeaderLogo} alt="HeaderLogo" />
            </div>
          </div>
        </div>
      </header>
      <br />
      <div className="hero">
        <div className={`${styles.HeaderContainer} text-center`}>
          <h2 className='font-semibold text-4xl'>Tovarlar mavjud</h2>

          <ul>
            {toveryHero.map((Data, index) => (
              <li key={index} className='grid grid-cols-3 gap-5'>
                <img src={Data.img} alt="rasm" />
                <h2>{Data.name}</h2>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </>
  )
}

export default Sotish
