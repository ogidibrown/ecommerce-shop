import { useEffect } from 'react';
import {createContext, useState} from 'react'
//create context
export const CartContext = createContext();


const CartProvider = ({children}) => {
    //cart state
    const [cart, setCart]= useState([]);

    //item amount state
    const [itemAmount, setItemAmount]=useState(0);

    //update item amount state
    useEffect(()=>{
      if (cart) {
        const amount = cart.reduce((accumulator, currentItem) =>
        {
          return accumulator + currentItem.amount; 
        },0);
          setItemAmount(amount);
      }
    })

     //total price State
     const [total, setTotal]= useState(0);

     //update total price state
     useEffect(()=>{
      if (cart) {
        const total = cart.reduce((accumulator, currentItem) =>
        {
          return accumulator + currentItem.price * currentItem.amount; 
        },0);
          setTotal(total);
      }
    })


    const addToCart =(id, product)=>{
        const newItem = {...product, amount:1};
        //check if the item is already in the cart
        const cartItem = cart.find((item)=>{
            return item.id===id;
    })
        //if cart item is already in the cart
        if (cartItem) {
          const newCart = [...cart].map(item=>{
            if (item.id===id){
              return{...item,amount:cartItem.amount+1}
            } else {
              return item;
            }
        });

          setCart(newCart);
        } else {
          setCart([...cart, newItem])
        }
    };

    //remove from cart
    const removeFromCart = (id) =>{
        const newCart = cart.filter(item=>{
          return item.id !==id
        })
        setCart (newCart);
    }

    //clear cart
    const clearCart =()=>{
      setCart([]);
    }

    //increase amount
    const increaseAmount = (id)=>{
      const cartItem = cart.find((item)=> item.id === id);
      addToCart(id, cartItem);
    }

     //decrease amount 
     const decreaseAmount = (id)=>{
      const cartItem = cart.find((item)=> item.id===id);
      if (cartItem) {
        const newCart = cart.map(item=>{
          if (item.id===id){
            return{...item,amount:cartItem.amount-1}
          } else {
            return item;
          }
      });

        setCart(newCart);
      } else {
        if(cartItem.amount < 2){
          removeFromCart(id);
        }
      }
    }

  return (
    <CartContext.Provider value={{addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;