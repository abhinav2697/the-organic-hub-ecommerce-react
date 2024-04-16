const getPriceSortedProducts = (products, type) => {
    const lowHighSortedProducts = [...products].sort((product1, product2) => {
      if (type === "LOW_TO_HIGH") {
        return product1.newPrice - product2.newPrice;
      } else if (type === "HIGH_TO_LOW") {
        return product2.newPrice - product1.newPrice;
      }
    });
  
    return lowHighSortedProducts;
  };
  
  export { getPriceSortedProducts };
  