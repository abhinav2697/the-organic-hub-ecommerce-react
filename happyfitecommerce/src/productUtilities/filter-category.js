const getCategoryFilterProducts = (products, category) => {
    let filteredProducts = [];
    if (category !== "all") {
        filteredProducts = products.filter(
            ({itemCategory})=>itemCategory===category
        )
    } else {
        filteredProducts = [...products];
    }
    return filteredProducts;
}
export { getCategoryFilterProducts };