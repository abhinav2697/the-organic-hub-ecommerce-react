import { Navbar, ProductCard,
  PriceRange, SortByPrice, Discount,
  FilterByStock, FilterByDelivery, ClearFilter,
  FilterByCategory, FilterByRating, Loader, Alert} from "../Components";

import { useFilter, useAlert } from "../context";

import { getfilteredProducts, getPriceSortedProducts,
  getDiscountedProducts, getProductsByStock,
  getFastDeliveryProducts, getCategoryFilterProducts,
  getProductsByRating, getProductsBySearch} from "../productUtilities";

import {useState, useEffect, Fragment} from "react";

import axios from "axios";

const Products = () => {
  const [route, setRoute] = useState();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useFilter();
  const {alert} = useAlert();
  const {
  minPrice,
  sortBy,
  discount,
  includeOutOfStock,
  fastDelivery,
  category,
  rating,
  searchInput
} = state;

  useEffect(() => {
      (async () => {
          try{
              const {data : {products}} = await axios.get("/api/products")
              setProducts(products);
              setIsLoading(false);
          }catch(error){
              setError(true);
          }
      })()
  }, [])


  useEffect(() => {
    setRoute("product");
  }, [route]);

  const filterByDiscount = getDiscountedProducts(products, discount);
  const filterByCategory = getCategoryFilterProducts(filterByDiscount,category);
  const filterByRating = getProductsByRating(filterByCategory, rating);
  const filterByStock = getProductsByStock(filterByRating, includeOutOfStock);
  const filterByDelivery = getFastDeliveryProducts(filterByStock, fastDelivery);
  const filterByPrice = getPriceSortedProducts(filterByDelivery, sortBy);
  const filterProducts = getfilteredProducts(filterByPrice, minPrice);
  const filterBySearch = getProductsBySearch(filterProducts, searchInput);

  return (
    <Fragment>
      {isLoading ? <Loader /> : (<div className="page">
      <Navbar route={route} />
      {!error ? (
        <div className="d-flex">
        <aside className="side-nav border-right sidebar-position">
          <ClearFilter />
          <PriceRange />
          <FilterByCategory />
          <SortByPrice />
          <FilterByRating />
          <Discount />
          <FilterByStock />
          <FilterByDelivery />
        </aside>
        <main className="product-content d-flex gap-48px wrap">
          {filterBySearch.length > 0 ? (filterBySearch.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))) : <h3 className="heading-3 fallback d-flex align-center justify-center">
          No products found. Try something else{" "}
          
        </h3>}
        </main>
      </div>
      ) : (
        <main className="product-content d-flex gap-48px wrap">
          <span className="heading-3 no-item-messgae">Nothing to display</span>
        </main>
      )}
      {alert.open && <Alert />}
    </div>)}
    </Fragment>
  );
};

export { Products };