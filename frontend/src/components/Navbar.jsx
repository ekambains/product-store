import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center m-5'>
        <div className='flex items-center space-x-1 text-2xl text-cyan-400'>
            <Link to={"/"}><span>Product Store</span></Link>
            <span><i className="fa-solid fa-cart-shopping"></i></span>
        </div>
        <div className='flex items-center space-x-2 text-cyan-500 text-l'>
            <Link to={"/create"}><button className='rounded bg-slate-800 p-2'><i className="fa-solid fa-plus bg-slate-800"></i> Add Item</button></Link>
        </div>
    </nav>
  )
}

export default Navbar