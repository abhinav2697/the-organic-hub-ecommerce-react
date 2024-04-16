const getDiscountedProducts = (products, precent) => {
    const filterByDiscount = products.filter(
      ({ discount }) => discount >= Number(precent)
    );
    return filterByDiscount;
  };
  
  export { getDiscountedProducts };
  