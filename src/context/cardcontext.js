import React from 'react'
import {createContext,useContext,useReducer} from 'react';
import {cartReducer} from "../reducer/cartReducer"

const initialValue ={
  cart:[],
}



const cardcontext =createContext(initialValue);


const CartProvider = ({children})=>{

  const [{cart},cartDispatch]=useReducer(cartReducer,initialValue);  

  return(
    <cardcontext.Provider value={{cart,cartDispatch}}>

    {children}
  </cardcontext.Provider>

  )




}

const useCart =() =>useContext(cardcontext)

export {useCart,CartProvider}