import React from 'react'
import { useState } from 'react';
import { useProductStore } from '../store/product';

const Createproduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [visible,  setVisible] = useState(false)
  const {createProduct} = useProductStore()
  const [feedback, setFeedback] = useState({
    color: "",
    description: "",
  });
  const handleAddProduct = async() => {
   const {success, message} = await createProduct(newProduct)
   if (success) {
    setFeedback({
      color: "bg-green-400",
      description: "Success! " + message,
    });
  } else {
    setFeedback({
      color: "bg-red-400",
      description: "Failed! " + message,
    });
  }
    setNewProduct({
        name: "",
        price: "",
        image: ""
    })
    setVisible(true)
    setTimeout(() => {
        setVisible(false);
    }, 3000)
  }

  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-slate-100'>Create New Product 🚀</h1>
        </div>
        <div className='flex justify-center m-5 mt-10'>
            <div className='flex flex-col space-y-5 w-2/5 bg-slate-800 p-10 rounded'>
                <input name='name' 
                       value={newProduct.name} 
                       onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
                       className='bg-slate-800 border border-solid text-slate-100 rounded h-9 p-3' 
                       type="text" placeholder='Product Name' />
                <input name='price' 
                       value={newProduct.price} 
                       onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                       className='bg-slate-800 border border-solid text-slate-100 rounded h-9 p-3' 
                       type="number" placeholder='Price' />
                <input name='image'
                       value={newProduct.image}
                       onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                       className='bg-slate-800 border border-solid text-slate-100 rounded h-9 p-3' 
                       type="text" placeholder='Image URL' />
                <button onClick={handleAddProduct} className='bg-cyan-400 rounded h-10'>Add Product</button>
            </div>
        </div>
        {visible && (<div className='flex justify-center items-end mt-20 p-20'>
            <div className={'h-12 w-1/4 ' + feedback.color + ' p-2'}>
              <p className={feedback.color + ' text-center'}>{feedback.description}</p>
            </div>
        </div>)}
    </div>
  )
}

export default Createproduct
