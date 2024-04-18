import { useFilter } from "../../context/filter-product-context";

export const FilterByCategory = () => {
  const { state, productDispatch } = useFilter();
  const handleChange = (e) => {
    productDispatch({
      type: "CATEGORY",
      payload: e.target.value
    });
  };

  return (
    <div className="category-title">
      <h3 className="sub-title margin16-top-down">Category</h3>
      <div className="select-men">
        <label className="men d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="all"
            checked={state.category === "all"}
            onChange={(e) => handleChange(e)}
          />
          All
        </label>
      </div>
      <div className="select-women margin8-top-down">
        <label className="women d-flex gap">
          {" "}
          <input
            className="check-box"
            type="radio"
            value="Ghee"
            checked={state.category === "Ghee"}
            onChange={(e) => handleChange(e)}
          />
          Ghee
        </label>
      </div>
      <div className="select-women margin8-top-down">
        <label className="women d-flex gap">
          {" "}
          <input
            className="check-box"
            type="radio"
            value="Honey"
            checked={state.category === "Honey"}
            onChange={(e) => handleChange(e)}
          />
          Honey
        </label>
      </div>
      <div className="select-boys margin8-top-down">
        <label className="boys d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="oils"
            checked={state.category === "oils"}
            onChange={(e) => handleChange(e)}
          />
          Stone Pressed Oil
        </label>
      </div>
      <div className="select-girls margin8-top-down">
        <label className="girls d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="Butter"
            checked={state.category === "Butter"}
            onChange={(e) => handleChange(e)}
          />
          Nut Butter
        </label>
      </div>
      <div className="select-boys margin8-top-down">
        <label className="boys d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="vegetables"
            checked={state.category === "vegetables"}
            onChange={(e) => handleChange(e)}
          />
          Vegetables
        </label>
      </div>
    </div>
  );
};
