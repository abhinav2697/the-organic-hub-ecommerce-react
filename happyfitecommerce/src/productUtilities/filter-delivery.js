const getFastDeliveryProducts = (products, fastDelivery) => {
    /** This function takes an array of products and boolean value
     * and returns a filtered array of all products that satisy the boolean value.
     * fastDelivery boolean value changes upon change of checkbox value
     */
    let filteredList = [];
    if (!fastDelivery) {
      let newList = products.filter((product) => product.isFast !== fastDelivery);
      filteredList.push(...newList);
    }
    let newList = products.filter((product) => product.isFast === fastDelivery);
    filteredList.push(...newList);
  
    return filteredList;
  };
    
  export { getFastDeliveryProducts };
    