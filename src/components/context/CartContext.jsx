import React, { useContext, useState } from "react";
import { createContext } from "react";
const CartContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartProductQuantity, setCartProductQuantity] = useState(0);

  const handleAddToCart = () => {
    setCartProductQuantity((prev) => prev + productQuantity);
    setProductQuantity(0);
  };

  const handleDeleteCart = () => {
    setCartProductQuantity((prev) => prev - 1);
  };

  return (
    <CartContext.Provider
      value={{
        productQuantity,
        cartProductQuantity,
        setCartProductQuantity,
        setProductQuantity,
        handleAddToCart,
        handleDeleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
