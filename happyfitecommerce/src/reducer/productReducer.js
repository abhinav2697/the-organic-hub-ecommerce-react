export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_INPUT":
    return {
      ...state,
      searchInput: payload
    };
    case "RANGE":
      return {
        ...state,
        minPrice: payload
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: type
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: type
      };
    case "DISCOUNT":
      return {
        ...state,
        discount: payload
      };
    case "OUT_OF_STOCK_CHECK":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock
      };
    case "DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery
      };
    case "CATEGORY":
      return {
        ...state,
        category: payload
      };
    case "RATING":
      return {
        ...state,
        rating: payload
      };
    case "CLEAR":
      return {
        ...state,
        minPrice: 4000,
        includeOutOfStock: false,
        fastDelivery: false,
        discount: "",
        sortBy: "",
        category: "all",
        rating: ""
      };
    case "WISHLIST":
      return {
        ...state,
        myWishlist: !state.myWishlist.some((prod) => prod._id === payload._id)
            ? [...state.myWishlist, payload]
            : state.myWishlist,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        myWishlist: state.myWishlist.filter(({_id}) => _id !== payload)
      };
    
    case "CLEAR_WISHLIST":
      return {
        ...state,
        myWishlist: []
      }

    default:
      return state;
  }
};
