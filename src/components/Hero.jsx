import React from 'react';
import {Assets} from '../assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-semibold text-sm md:text-base text-purple'>Os Melhores</p>
                </div>
                <h1 className='museomoderno text-3xl sm:py-3 lg:text-5xl leading-relaxed text-purple-600'>ÚLTIMO DROP</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base text-purple' >Compre Agora</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Right */}
        <img src={Assets.p_img_2} className='w-full sm:w-1/2' alt="Produto Drop Novo 1" />
    </div>
  )
}

export {Hero};
