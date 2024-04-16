import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Checkout, Navbar } from "../Components";
import { useAddress } from "../context/";

export const CheckoutPage = () => {
  const { newAddress } = useAddress();

  const navigate = useNavigate();

  const finalAddress = newAddress?.filter(
    ({ isChecked }) => isChecked === true
  );

  const handleChange = () => {
    navigate("/address");
  };

  console.log("Checkout-", finalAddress);

  return (
    <Fragment>
      <Navbar />
      <main class="checkout-page-container">
        <h2 class="text-center">Confirm Order</h2>
        <div class="d-flex gap-48px wrap justify-center">
          {finalAddress.map(({ _id, name, address, number, landmark }) => {
            return (
              <div className="address-display-container final-add relative">
                <div className="user-details d-flex align-center gap">
                  <input
                    id={_id}
                    type="radio"
                    name="select"
                    className="check-box"
                    checked
                  />
                  <span>Name - {name}</span>
                  <span> | </span>
                  <span>Ph No - +{number}</span>
                </div>
                <div className="address-details d-flex direction-column gap-8px">
                  <span>Address - {address}</span>
                  <span>Landmark - {landmark}</span>
                </div>
                <div className="update-btn-container absolute top-0 right-0 padding-all-8 d-flex gap">
                  <button className="button edit cursor" onClick={handleChange}>
                    <span class="material-icons-outlined">change_circle</span>
                  </button>
                </div>
              </div>
            );
          })}
          <Checkout />
        </div>
      </main>
    </Fragment>
  );
};
