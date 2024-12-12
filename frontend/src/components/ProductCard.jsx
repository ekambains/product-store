import React from 'react'
import { useProductStore } from '../store/product'
import Modal from './Modal';
import { useState } from 'react';

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const {deleteProduct, updateProduct} = useProductStore();
    const handleDeleteProduct = async(pid) => {
        const {message} = await deleteProduct(pid);
        console.log(message);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    setIsModalOpen(false);
  }

  return (
    <>
    <Modal isOpen={isModalOpen} onClose={handleUpdateProduct}>
       <div className='bg-slate-800 flex flex-col text-slate-100'>
        <h2 className='bg-slate-800 text-slate-100 text-l font-bold mb-2'>Update Product</h2>
        <input className='bg-slate-800 border m-2 h-8 p-1' type="text" name="name" placeholder="Name" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
        <input className='bg-slate-800 border m-2 h-8 p-1' type="Number" name='price' placeholder='Price' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})} />
        <input className='bg-slate-800 border m-2 h-8 p-1' type="text" name='image' placeholder='Image URL' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})} />
        <button className='bg-blue-400 rounded m-2 h-10 hover:bg-blue-500 text-black' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</button>
       </div>
      </Modal>
    <div className='h-64 w-72 bg-slate-800 rounded m-5'>
        <div className='h-1/2 w-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={product.image} alt={product.name} />
        </div>
        <h4 className='bg-slate-800 text-slate-100 font-bold m-1 ml-2.5 mt-2 text-l'>{product.name}</h4>
        <h4 className='bg-slate-800 text-slate-100 m-1 ml-2.5'>{'$' + product.price}</h4>
        <div className='bg-slate-800 text-slate-900 ml-2.5 mt-4'>
            <button className='bg-blue-400 mr-3 w-8 h-8 rounded' onClick={handleEditClick}><i className="fa-solid fa-pen-to-square bg-blue-400"></i></button>
            <button className='bg-red-400 w-8 h-8 rounded' onClick={() => handleDeleteProduct(product._id)}><i className="fa-solid fa-trash-can bg-red-400"></i></button>
        </div>
    </div>
    </>
  )
}

export default ProductCard