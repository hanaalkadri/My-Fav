import React, { createContext, useState } from "react";
import all_Product from "../Components/Assets/all_product";




export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index = 0; index < all_Product.length+1; index++){
       cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
   

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const contextValue={all_Product, cartItems}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;