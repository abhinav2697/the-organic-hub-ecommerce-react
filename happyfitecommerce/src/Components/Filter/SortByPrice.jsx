import { useFilter } from "../../context/filter-product-context";

export const SortByPrice = () => {
  const {
    state: { sortBy },
    productDispatch
  } = useFilter();

  return (
    <div className="sort-container">
      <h3 className="sub-title margin16-top-down">Sort by</h3>

      <div className="margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="sortByPrice"
            value="lowToHigh"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              productDispatch({
                type: "LOW_TO_HIGH"
              })
            }
          />
          Price - Low to High
        </label>
      </div>
      <div className="margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="sortByPrice"
            value="highToLow"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              productDispatch({
                type: "HIGH_TO_LOW"
              })
            }
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};
