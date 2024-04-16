const getProductsByStock = (products, includeOutOfStock) => {
    /** This function takes an array of products and boolean value that comes from input checkbox
     * and returns a filtered array of all products that satisy the boolean value.
     * Function returns an array of products that are innstock if boolean is false
     * and returns out of stock + in stock values if boolean value is true
     */
    let filtertedList = [];
    let newList = [];
    if (includeOutOfStock) {
      newList = products.filter(
        ({ outOfStock }) => outOfStock !== includeOutOfStock
      );
      filtertedList.push(...newList);
    }
    newList = products.filter(
      ({ outOfStock }) => outOfStock === includeOutOfStock
    );
    filtertedList.push(...newList);
    return filtertedList;
  };
    
    export { getProductsByStock };
    