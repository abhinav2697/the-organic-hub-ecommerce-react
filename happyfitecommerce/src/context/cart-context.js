import axios from "axios";
import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalItemPrice: 0,
    discountedPrice: 0,
    deliveryCharge: 150,
    totalAmount: 0
  });
  const [userCart, setUserCart] = useState([]);

  const addToCart = async (product, setAlert, title, productCategory) => {
    try {
      const {data: {cart}} = await axios.post("/api/user/cart", {product},
      {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      setUserCart(userCart => [...userCart, cart])
        cartDispatch({
          type: "ADD_TO_CART",
          payload: product
        })
        setAlert({
          open: true,
          message: `${title} - ${productCategory} Added To Cart`,
          type: "success"
        })
      
    }catch(err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
  }

  const removeFromCart = async (product, setAlert, title, productCategory) => {
    try {
      const {data: {cart}} = await axios.delete(`api/user/cart/${product._id}`, 
      {headers : {authorization : localStorage.getItem("token")}})
      localStorage.setItem("cart", JSON.stringify(cart));
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id
      })
      setAlert({
        open: true,
        message: `${title} - ${productCategory}  Removed From Cart`,
        type: "success"
      })
    }catch(err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
  }

  const updateProductQuantity = async (product, updateValue, setAlert) => {
    try {
      const updateQuantity = await axios.post(`api/user/cart/${product._id}`, {
        action : {
          type: updateValue
        }
      },
      {
        headers: {authorization : localStorage.getItem("token")}
      })
      cartDispatch({
        type: updateValue === "increment" ? "INCREASE_QUANTITY" : "DECREASE_QUANTITY",
        payload: product._id
      })
    }catch (err){
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
  }

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart, removeFromCart, userCart, setUserCart, updateProductQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
