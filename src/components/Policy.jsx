import React from 'react'
import { Assets } from '../assets';

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-purple-600'>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_sustentability} alt="Ícone de sustentabilidade" />
            <p className='font-semibold text-purple-600'>Embalagens Sustentáveis</p>
            <p className='text-purple-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_exchange} alt="Ícone de reembolso" />
            <p className='font-semibold text-purple-600'>Retornos</p>
            <p className='text-purple-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_quality} alt="Ícone de qualidade" />
            <p className='font-semibold text-purple-600'>Qualidade</p>
            <p className='text-purple-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </div>
  )
}

export {Policy};