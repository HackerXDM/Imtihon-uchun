import React from 'react'
import Data from '/src/data/Data.js';
import { Link } from 'react-router-dom'

//import syles
import { styles } from "../styles"

const Katalog = () => {
  return (
    <div>
      <div  className={`${styles.HeaderContainer}`}>
        <ul className='grid grid-cols-4 py-5'>
          {Data && 
          Data.length > 0 && 
          Data.map((Data,index)=> {
            return(
                <li className='border p-4' key={index}>
                  <Link to={`/katalog/${Data.id}`}>
                  <img src={Data.icon} alt="rate" />
                    < img src={Data.Image} className=" h-[270px] w-[210px] p-5 ml-5"
                      alt={Data.kompany}
                  />
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{Data.kompany}</p>
                  </div>
                  <p className="text-gray-600 mb-2">{Data.name}</p>
                  <p className="font-semibold">
                    ${Data.number}
                    {Data.number}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Katalog
