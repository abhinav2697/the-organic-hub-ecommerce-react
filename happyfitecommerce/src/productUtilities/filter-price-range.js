const getfilteredProducts = (products, price) => {
  const filteredProducts = products.filter(
    ({ newPrice }) => newPrice <= Number(price)
  );
  return filteredProducts;
};

export { getfilteredProducts };
