const getProductsByStock = (products, includeOutOfStock) => {
    let filteredList = [];
    let newList = [];
    if (includeOutOfStock) {
        newList = products.filter(
            ({outOfStock})=>outOfStock!==includeOutOfStock
        )
        filteredList.push(...newList);
    }
    newList = products.filter(
        ({outOfStock})=>outOfStock===includeOutOfStock
    )
    filteredList.push(...newList);
    return filteredList;
}

export { getProductsByStock };