export const isInCart = (products, productId) =>
    products.some(({ _id }) => _id === productId);