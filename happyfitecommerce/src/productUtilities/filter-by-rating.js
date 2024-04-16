export const getProductsByRating = (products, rating) => {
    let filteredProducts = products.filter(
      ({ itemRating }) => itemRating >= rating
    );
    return filteredProducts;
  };
  