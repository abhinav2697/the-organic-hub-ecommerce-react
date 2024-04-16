import { useFilter } from "../../context/filter-product-context";

export const Discount = () => {
  const {
    state: { discount },
    productDispatch
  } = useFilter();
  const handleDiscountChange = (e) => {
    productDispatch({
      type: "DISCOUNT",
      payload: e.target.value
    });
  };
  return (
    <div className="sort-container">
      <h3 className="sub-title margin16-top-down">Discount</h3>
      <div>
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            value="50"
            name="discount"
            checked={discount === "50"}
            onChange={(e) => handleDiscountChange(e)}
          />
          50% and above
        </label>
      </div>
      <div className=" margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            value="30"
            name="discount"
            checked={discount === "30"}
            onChange={(e) => handleDiscountChange(e)}
          />
          30% and above
        </label>
      </div>
      <div className="margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            value="20"
            name="discount"
            onChange={(e) => handleDiscountChange(e)}
            checked={discount === "20"}
          />
          20% and above
        </label>
      </div>
    </div>
  );
};
