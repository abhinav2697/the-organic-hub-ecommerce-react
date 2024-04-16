import { useFilter } from "../../context/filter-product-context";
export const FilterByRating = () => {
  const {
    state: { rating },
    productDispatch
  } = useFilter();

  const handleRatingChange = (e) => {
    productDispatch({
      type: "RATING",
      payload: e.target.value
    });
  };

  return (
    <div className="rating-container">
      <h3 className="sub-title margin16-top-down">Rating</h3>
      <div>
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="rating"
            value="4"
            checked={rating === "4"}
            onChange={(e) => handleRatingChange(e)}
          />
          4 stars and above
        </label>
      </div>
      <div className=" margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="rating"
            value="3"
            checked={rating === "3"}
            onChange={(e) => handleRatingChange(e)}
          />
          3 stars and above
        </label>
      </div>
      <div className=" margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="rating"
            value="2"
            checked={rating === "2"}
            onChange={(e) => handleRatingChange(e)}
          />
          2 stars and above
        </label>
      </div>
      <div className=" margin8-top-down">
        <label className="men d-flex gap align-center">
          <input
            className="check-box"
            type="radio"
            name="rating"
            value="1"
            checked={rating === "1"}
            onChange={(e) => handleRatingChange(e)}
          />
          1 star and above
        </label>
      </div>
    </div>
  );
};
