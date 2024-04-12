const getDiscountedProducts = (products, percent) => {
    const filterByDiscount = products.filter(
        ({ discount }) => discount >= Number(percent)
        
    )
    return filterByDiscount;
}

export { getDiscountedProducts };