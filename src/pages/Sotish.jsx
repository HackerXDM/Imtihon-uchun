import React from 'react';
import Time from "../image/TimeHeader.png";

const Sotish = () => {
  return (
    <div className='relative h-screen w-screen'>
      <div className='bg-slate-300 h-full w-full flex items-center justify-center'>
        <img src={Time} alt="Time" className='max-h-full max-w-full' />
        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white font-bold'>
          Salom
        </p>
      </div>
    </div>
  );
};

export default Sotish;
