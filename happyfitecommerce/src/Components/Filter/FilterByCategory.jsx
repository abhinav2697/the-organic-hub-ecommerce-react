import { useFilter } from "../../context/filter-product-context";

export const FilterByCategory = () => {
    const { state, productDispatch } = useFilter();
    const handleChange = (e) => {
        productDispatch({
            type: "CATEGORY",
            payload:e.target.value
        })
    }
    return (
        <div className="category-title">
            <h3 className="sub-title margin16-top-down">Category</h3>
            <div className="select-men">
                <label className="select-men">
                    <input
                        className="check-box"
                        type="radio"
                        value="all"
                        checked={state.category === "all"}
                        onChange={(e)=>handleChange(e)}
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
                        value="men"
                        checked={state.category === "men"}
                        onChange={(e) => handleChange(e)}
                    />
                    Men
                </label>
            </div>
            <div className="select-women margin8-top-down">
                <label className="women d-flex gap">
                    {" "}
                    <input
            className="check-box"
            type="radio"
            value="women"
            checked={state.category === "women"}
            onChange={(e) => handleChange(e)}
          />
          Women
        </label>
      </div>
      <div className="select-boys margin8-top-down">
        <label className="boys d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="boys"
            checked={state.category === "boys"}
            onChange={(e) => handleChange(e)}
          />
          Boys
        </label>
      </div>
      <div className="select-girls margin8-top-down">
        <label className="girls d-flex gap">
          <input
            className="check-box"
            type="radio"
            value="girls"
            checked={state.category === "girls"}
            onChange={(e) => handleChange(e)}
          />
          Girls
        </label>
      </div>
    </div>
  );
};