import React from 'react'
import { useEffect } from 'react';
import { useProductStore } from '../store/product';
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <div className='flex justify-center mb-20'>
        <h1 className='text-3xl text-cyan-400 font-bold'>Current Products🔥</h1>
      </div>
      <div className='grid grid-cols-4 w-full ml-10 mr-10'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {products.length === 0 && (<div className='flex justify-center'>
        <p className='text-xl text-slate-100 font-thin'>No Products Found 😭, <Link to={"/create"}><span className='text-xl text-blue-600 font-thin underline'>Create New Product</span></Link></p>
      </div>)}
    </div>
  )
}
export default HomePage