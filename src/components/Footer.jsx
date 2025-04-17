import React from 'react'
import { Assets } from '../assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={Assets.logo_full} alt="Logo" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-purple-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>KORE BRECHÓ</p>
                <ul className='flex flex-col gap-1 text-purple'>
                    <li>Inicial</li>
                    <li>Sobre Nós</li>
                    <li>Entregas</li>
                    <li>Política de Privacidade</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>NOS CONTATE</p>
                <ul className='flex flex-col gap-1 text-purple'>
                    <li>51987654321</li>
                    <li>contato@korebrecho.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Cpoyright 2025@ korebrecho.com - Todos direitos reservados.</p>
        </div>

    </div>
  )
}

export {Footer}