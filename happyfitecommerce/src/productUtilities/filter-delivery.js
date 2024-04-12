const getFastDeliveryProducts = (products, fastDelivery) => {
    let filteredList = [];
    if (!fastDelivery) {
        let newList = products.filter((product) => product.isFast !== fastDelivery);
        filteredList.push(...newList);
    }
    let newList = products.filter((product) => product.isFast === fastDelivery);
    filteredList.push(...newList);
    return filteredList;
}

export { getFastDeliveryProducts };