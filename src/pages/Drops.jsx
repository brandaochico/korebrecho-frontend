import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context';
import { Assets } from '../assets';
import { Title } from '../components';
import { ProductItem } from '../components/ProductItem';

const Drops = () => {
  const { Products } = useContext(ShopContext);
  
  const [showFilter, setShowFilter] = useState(false);
  
  const [filterProducts, setFilterProducts] = useState([]);
 
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item != e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }

  }

  const toggleSubCategory = (e) => {

    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }

  }

  useEffect(() => {
      setFilterProducts(Products);
  },[]);

  const applyFilter = () => {

    let productsTemp = Products.slice();

    if(category.length > 0) {
      productsTemp = productsTemp.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productsTemp = productsTemp.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsTemp);

  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300'>

      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTROS
          <img className={`h-3 sm:hidden ${showFilter ? '' : 'rotate-270'}`} src={Assets.icon_dropdown} alt="Dropdown" />
        </p>
        {/** Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIAS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-purple-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Masculino
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Feminino
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Genderless'} onChange={toggleCategory} /> Unissex
            </p>
          </div>
        </div>
      {/** SubCategory filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TIPO</p>
          <div className='flex flex-col gap-2 text-sm font-light text-purple-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Pants'} onChange={toggleSubCategory} /> Calças
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Dress'} onChange={toggleSubCategory} /> Vestidos
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Blazer'} onChange={toggleSubCategory} /> Blazers
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Shorts'} onChange={toggleSubCategory} /> Bermudas
            </p>
          </div>
        </div>
      </div>

    {/** Right Side */}
    <div className='flex-1'>

      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'TODOS'} text2={'PRODUTOS'} />
        {/** Product sort */}
        <select className='border-2 border-gray-300 text-sm px-2'>
          <option value="relevant">Ordernar: Relevância</option>
          <option value="low-high">Ordernar: Menor - Maior</option>
          <option value="high-low">Ordernar: Maior - Menor</option>
        </select>
      </div>

      {/** Map products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts?.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        }
      </div>

    </div>
    
    </div>
  )
}

export {Drops};