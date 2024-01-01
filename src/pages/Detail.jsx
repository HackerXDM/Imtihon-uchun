import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '/src/data/Data.js';



const Detail = () => {
  const { id } = useParams()   
  const foundProduct = Data.find(e => e.id == id)


  return (
    <div className='py-10'>
      <div className='w-full max-w-2xl mx-auto px-5'>
        <div>
          <ul>
            <li>
              <Link to={`/katalog/${Data.id}`}>
               <div className='grid grid-cols-2'>
                  <img
                    src={foundProduct.Image}
                    className="w-10 h-10 rounded-lg mb-3"
                    alt={foundProduct.kompany}
                  />
                  <div>
                   <img src={foundProduct.Image} alt="rate" />
                    <div className="flex  items-center">
                      <p className=" mr-2 font-bold text-4xl">{foundProduct.kompany}</p>
                      <div className="flex items-center font-medium">
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2 font-bold text-2xl">{foundProduct.number}</p>
                    <p className=" font-bold text-2xl">
                      ${foundProduct.name}
                      {foundProduct.kompany}
                    </p>
                    <p className=" font-bold text-2xl">
                      ${foundProduct.brend}
                      {foundProduct.Состояние}
                      {foundProduct. Пол}
                      {foundProduct.Корпус}
                    </p>
                  </div>
               </div>
              </Link>
            </li >
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Detail
