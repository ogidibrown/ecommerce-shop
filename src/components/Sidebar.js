import React from 'react'
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from '../components/CartItem';
import {SidebarContext} from '../contexts/SidebarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const {isopen, handleClose}= useContext(SidebarContext);
  const {cart, clearCart,total,itemAmount} = useContext(CartContext)
  
  return (
    <div className={` ${isopen ? 'right-0':'-right-full'} w-full bg-white fixed top-0 h-full
    shadow-2xl md:w-[35vw] xl:max-w-[30vh] transition-all duration-300 z-20 px-4
    lg:px-[35px]`}>
      <div className='flex items-center justify-between py-2 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        {/*icons*/}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center
        items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[400px] lg:h-[520px] overflow-y-auto 
      overflow-x-hidden border-b '>
        {cart.map((item)=>{
          return <CartItem key={item.id} item={item}/>;
        })}
      </div>
      <div>
        <div className='flex w-full justify-between items-center'>
          {/*total*/}
          <div className='uppercase font-semibold'>
             <span className='mr-2'>Total:</span>¢{parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl'>
            <FiTrash2/>
          </div>
        </div>
        <div to='/' className='bg-gray-200 flex p-4 justify-center items-center
        text-primary w-full font-medium my-2'>
          View Cart
        </div>
        <div className='bg-primary flex p-4 justify-center items-center
        text-white w-full font-medium'>Checkout</div>
      </div>
    </div>
  )
}

export default Sidebar