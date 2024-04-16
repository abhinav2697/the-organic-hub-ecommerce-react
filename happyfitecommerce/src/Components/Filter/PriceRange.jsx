import { useFilter } from "../../context/filter-product-context";

export const PriceRange = () => {
  const {
    state: { minPrice },
    productDispatch
  } = useFilter();
  return (
    <>
      <h3 className="sub-title margin16-top-down">Price</h3>
      <div className="silder-container">
        <div className="price-range d-flex grow-shring-basis gap-large">
          <span>1k</span> <span>2k</span> <span>3k</span> <span>4k</span>
        </div>
        <input
          className="slider"
          type="range"
          min="1000"
          step="1000"
          max="4000"
          value={minPrice}
          onChange={(e) =>
            productDispatch({
              type: "RANGE",
              payload: e.target.value
            })
          }
        />
      </div>
    </>
  );
};
