import "./Filter.css";
import { useFilter } from "../../context/filter-product-context";
export const ClearFilter = () => {
  const { productDispatch } = useFilter();
  return (
    <div className="filter-clear d-flex align-center">
      <h3 className="sub-title">Filter</h3>
      <button
        className="button clear-btn cursor mg-left"
        onClick={() =>
          productDispatch({
            type: "CLEAR"
          })
        }
      >
        Clear
      </button>
    </div>
  );
};
