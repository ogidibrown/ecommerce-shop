import { useContext, useEffect } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import {BsBag} from 'react-icons/bs';
import Logo from '../img/ksi.jpg';
// import { NavLink } from "react-router-dom";
import { useState } from "react";



const Header = () => {
  //header state
  const [isActive, setIsActive]=useState(false); 
  const {isopen, setIsopen}= useContext(SidebarContext);
  const {itemAmount}= useContext(CartContext);
  const openClose = ()=>{
    setIsopen(!isopen)
  };
  //event listener
  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true):setIsActive(false);
    })
  })

  return (
    <header className={`${isActive? ' bg-[#c4ada0]':'bg-none py-4'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between
          h-full">
        <div to={'/'}>
           <div >
             <img className="w-[40px]" src={Logo} alt="" />
           </div>
        </div>
        <div className="flex cursor-pointer relative " onClick={openClose}>
          <BsBag className='text-2xl' />
          <div className="bg-red-600 absolute -right-2 -bottom-2
          text-[12px] w-[18px] h-[18px] text-white rounded-full 
          flex justify-center items-center " >{itemAmount}</div>
        </div>

      </div>
    </header>

  )
}

export default Header