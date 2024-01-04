import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '/src/data/Data.js';



const Detail = () => {
  const { id } = useParams()
  const foundProduct = Data.find(e => e.id == id)


  return (
    <>
      <section className='container gap-2 flex justify-around flex-wrap m-4'>
        <div className='w-[25%] h-[450px] '>
          <img src={foundProduct.Image} className='w-[100%] h-[100%]' alt="rate" />
        </div>
        <div className='w-[30%]'>
          <div className="flex  items-center">
            <p className=" mr-2 font-bold text-4xl">{foundProduct.kompany}</p>
            <div className="flex items-center font-medium">
            </div>
          </div>
          <p className=" font-bold text-xl">
            {foundProduct.name}
          </p>
            <p className="text-gray-600 mb-2 font-bold text-2xl mt-[30px]">$ {foundProduct.number}</p>
          <p className=" font-bold text-2xl">
            {foundProduct.brend}
            {foundProduct.Состояние}
            {foundProduct.Пол}
            {foundProduct.Корпус}
          </p>
          <button className='w-[350px] mt-[80px] cursor-pointer h-[50px] bg-[#1EA76A] text-[white]'>Sotib olish</button>
        </div>
      </section>
    </>
  )
}

export default Detail
