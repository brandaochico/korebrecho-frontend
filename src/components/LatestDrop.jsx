import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context';
import { Title } from './Title';
import { ProductItem } from './ProductItem';

const LatestDrop = () => {

  const {Products} = useContext(ShopContext);
  const [latestDrop, setLatestDrop] = useState([]);

  useEffect(() => {
    const latestProduct = Products.filter((item) => (item.new_drop));
    setLatestDrop(latestProduct.slice(0,4));
  },[]
  );

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'ÚLTIMO'} text2={'DROP'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md>text-base text-purple'>
        Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          latestDrop.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export {LatestDrop};