import React, { useState } from 'react';
import {Assets} from '../assets';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'>
            <img src={Assets.logo_full} className='w-38' alt="Logo"/>
        </Link>

        <ul className='hidden sm:flex gap-5 text-base text-purple-600'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Inicial</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-purple hidden' />
            </NavLink>

            <NavLink to='/colecao' className='flex flex-col items-center gap-1'>
                <p>Coleção</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-purple hidden' />
            </NavLink>

            <NavLink to='/sobre' className='flex flex-col items-center gap-1'>
                <p>Sobre</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-purple hidden' />
            </NavLink>

            <NavLink to='/contato' className='flex flex-col items-center gap-1'>
                <p>Contato</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-purple hidden' />
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img src={Assets.icon_search} className='w-5 cursor-pointer' alt="Busca"/>

            <div className='group relative'>
                <img src={Assets.icon_user} className='w-5 cursor-pointer' alt="Perfil"/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>Perfil</p>
                        <p className='cursor-pointer hover:text-black'>Pedidos</p>
                        <p className='cursor-pointer hover:text-black'>Sair</p>
                    </div>
                </div>
            </div>

            <Link to='/carrinho' className='relative'>
                <img src={Assets.icon_bag} className='w-5 min-w-5' alt="Carrinho" />
                <p className='absolute right-[-5px] w-5 text-center leading-4 bg-purple text-white aspect-square rounded-full text-[10px] font-bold'>10</p>
            </Link>

            <img onClick={() => setVisible(true)} src={Assets.icon_menu} className='w-5 cursor-pointer sm:hidden ' alt="Menu" />
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-purple'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                    <img src={Assets.icon_back} className='h-4' alt="" />
                    <p>Voltar</p>
                </div>
                <hr />
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/'>Inicial</NavLink>
                <hr />
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/colecao'>Coleção</NavLink>
                <hr />
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/sobre'>Sobre</NavLink>
                <hr />
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6' to='/contato'>Contato</NavLink>
                <hr />
            </div>
        </div>

    </div>
  )
}

export {Navbar};