import React from 'react'
import { Assets } from '../assets';

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-purple'>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_sustentability} alt="Ícone de sustentabilidade" />
            <p className='font-semibold text-purple'>Embalagens Sustentáveis</p>
            <p className='text-purple'>Nossas embalagens são 100% sustentáveis e ecológicas - e não deixam de serem ótimas! Além disso, os produtos vêm muito bem perfumados!</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_exchange} alt="Ícone de reembolso" />
            <p className='font-semibold text-purple'>Retornos</p>
            <p className='text-purple'>Caso alguma peça por algum motivo tenha passado despercebida na nossa curadoria, nos contate que formalizaremos o processo de retorno.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={Assets.icon_quality} alt="Ícone de qualidade" />
            <p className='font-semibold text-purple'>Qualidade</p>
            <p className='text-purple'>Cuidamos e tratamos com todo o carinho cada peça que vendemos. Podemos garantir que nossa curadoria trabalha muito bem em cima da qualidade de cada roupa que anunciamos!</p>
        </div>
    </div>
  )
}

export {Policy};