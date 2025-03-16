import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context';
import { Title } from './Title';
import { ProductItem } from './ProductItem';

const AllDrops = () => {

  const {Products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(Products.slice(0,6));
  },[]
  );

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'TODOS'} text2={'PRODUTOS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md>text-base text-purple'>
        Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export {AllDrops};