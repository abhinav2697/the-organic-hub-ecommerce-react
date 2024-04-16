import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducer/productReducer";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const [state, productDispatch] = useReducer(productReducer, {
    minPrice: 4000,
    sortBy: "",
    discount: "",
    includeOutOfStock: false,
    fastDelivery: false,
    category: "all",
    rating: 0,
    myWishlist: [],
    searchInput: ""
  });

  const addToWishlist = async (product, setAlert, title, productCategory) => {
    try {
      const {data: {wishlist}} = await axios.post("/api/user/wishlist", {product}, {
        headers: {authorization: localStorage.getItem("token")}
      })
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
        productDispatch({
          type: "WISHLIST",
          payload: product
        })
        setAlert({
          open: true,
          message: `${title} - ${productCategory} Added To Wishlist`,
          type: "success"
        })
    }catch(err){
      console.log(err)
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
  }

  const removeFromWishlist = async (product, setAlert) => {
    try {
      const {data: {wishlist}} = await axios.delete(`api/user/wishlist/${product._id}`, 
      {
        headers: {authorization: localStorage.getItem("token")}
      })
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
      productDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id
      })
      setAlert({
        open: true,
        message: "Item Removed From Wishlist",
        type: "success"
      })
    }catch(err){
      console.log(err)
      setAlert({
        open: true,
        message: "Something went wrong",
        type: "error"
      })
    }
  }

  return (
    <FilterContext.Provider value={{ state, productDispatch, addToWishlist, removeFromWishlist }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
