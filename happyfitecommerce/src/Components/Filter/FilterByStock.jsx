import { useFilter } from "../../context/filter-product-context";

export const FilterByStock = () => {
  const { state, productDispatch } = useFilter();
  return (
    <div className="category-title">
      <h3 className="sub-title margin16-top-down">Additional Filters</h3>
      <div className="select-men">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="checkbox"
            value="OUT_OF_STOCK_CHECK"
            onChange={() =>
              productDispatch({
                type: "OUT_OF_STOCK_CHECK"
              })
            }
            checked={state.includeOutOfStock}
          />
          Include Out of Stock
        </label>
      </div>
    </div>
  );
};
