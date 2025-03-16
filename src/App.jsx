import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home, Drops, About, Cart, Contact, Product, Login, Orders, PlaceOrder} from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/colecao' element={<Drops/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/carrinho' element={<Cart/>}/>
        <Route path='/contato' element={<Contact/>}/>
        <Route path='/produto/:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pedidos' element={<Orders/>}/>
        <Route path='/fazer-pedido' element={<PlaceOrder/>}/>
      </Routes>

    </div>
  )
}

export default App