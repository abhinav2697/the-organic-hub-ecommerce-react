export const cartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, { ...payload, itemCount: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter(({_id}) => _id !== payload)
      };

    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((product) =>
          product._id === payload
            ? { ...product, itemCount: product.itemCount + 1 }
            : product
        )
      };

    case "DECREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((product) =>
          product._id === payload
            ? { ...product, itemCount: product.itemCount - 1 }
            : product
        )
      };

    case "CLEAR_CART":
      return {
        ...cartState,
        cart: []
      }
    default:
      return cartState;
  }
};
