import { useFilter } from "../../context/filter-product-context";

export const FilterByDelivery = () => {
  const { state, productDispatch } = useFilter();
  return (
    <div className="category-title margin16-top-down">
      <div className="select-men">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="checkbox"
            checked={state.fastDelivery}
            onChange={() =>
              productDispatch({
                type: "DELIVERY"
              })
            }
          />
          Fast Delivery
        </label>
      </div>
    </div>
  );
};
