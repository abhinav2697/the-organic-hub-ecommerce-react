const getCategoryFilterProducts = (products, category) => {
    /** This function takes an array of products and a category input that can be either
     * men, women, boys or girls
     * Function returns a filtered array of products that match the category
     */
  
    let filteredProducts = [];
    if (category !== "all") {
      filteredProducts = products.filter(
        ({ itemCategory }) => itemCategory === category
      );
    } else {
      filteredProducts = [...products];
    }
    return filteredProducts;
  };
    
  export { getCategoryFilterProducts };
    