export const getProductsBySearch = (products, searchInput) => {
    return products.filter(
      ({ title, productCategory, itemCategory }) =>
        title.toLowerCase().includes(searchInput.toLowerCase()) ||
        productCategory.toLowerCase().includes(searchInput.toLowerCase()) ||
        itemCategory.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  