import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddressForm, DisplayAddress, Alert } from "../Components";
import "./Address.css";
import { useAddress, useAlert } from "../context";

export const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleNewAddressClick = () => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
  };

  const { newAddress, selected } = useAddress();

  const navigate = useNavigate();

  const {alert, setAlert} = useAlert();

  const handleCheckoutClick = () => {
      if (newAddress.length > 0 && selected){
        navigate("/checkout")
      }else {
          setAlert({
              open: true,
              message: "Please select an address for delivery",
              type: "error"
          })
      }
    
  }

  console.log("Address-", newAddress);

  return (
    <Fragment>
        {alert.open && <Alert />}
      <div className=" address-container d-flex direction-column align-center justify-center">
        <span className="heading-2 add-title">Manage Address</span>
        <div className="d-flex align-center gap">
          <button
            className=" button btn-primary d-flex align-center justify-center gap cursor"
            onClick={handleNewAddressClick}
          >
            Add New Address <span class="material-icons-outlined">add</span>{" "}
          </button>
          <button
            className="button btn-outline-primary"
            onClick={handleCheckoutClick}
          >
            Proceed to Checkout
          </button>
        </div>
        {isFormOpen && (
          <AddressForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        )}
        {newAddress &&
          newAddress.length > 0 &&
          newAddress.map((addresses) => (
            <DisplayAddress
              addresses={addresses}
              key={newAddress._id}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          ))}
      </div>
    </Fragment>
  );
};
