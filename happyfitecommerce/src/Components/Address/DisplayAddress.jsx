import {useState} from "react";
import "./AddressForm.css";
import { useAddress } from "../../context";
import {isAddressSelected} from "../../productUtilities";

export const DisplayAddress = ({ addresses, isFormOpen, setIsFormOpen }) => {
  const {
    userDetails,
    setUserDetails,
    newAddress,
    setNewAddress,
    setSelected
  } = useAddress();

  const { _id, name, address, number, landmark, isChecked } = addresses;

  const handleEditClick = (addressId) => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
    setUserDetails({ ...userDetails, name, address, number, landmark });
    setNewAddress(newAddress.filter(({ _id }) => _id !== addressId));
  };

  const handleDeleteClick = (addressId) => {
    setNewAddress(newAddress.filter(({ _id }) => _id !== addressId));
  };

  const handleChange = (event, addressId) => {
    if (event.target.checked){
      const updatedAddressess = newAddress.map((newAdd) =>
      newAdd._id === addressId
        ? { ...newAdd, isChecked: !newAdd.isChecked }
        : { ...newAdd, isChecked: false }
      );
      setNewAddress(updatedAddressess);
      setSelected(true);
    }else{
      setSelected(false);
    }
    
  };

  return (
    <div className="address-display-container relative">
      <div className="user-details d-flex align-center gap">
        <input
          id={_id}
          type="radio"
          name="select"
          className="check-box"
          checked={isAddressSelected(newAddress, _id)}
          onChange={(event) => handleChange(event, _id)}
        />
        <span>Name - {name}</span>
        <span> | </span>
        <span>Ph No - +91 {number}</span>
      </div>
      <div className="address-details d-flex direction-column gap-8px">
        <span>Address - {address}</span>
        <span>Landmaark - {landmark}</span>
      </div>
      <div className="update-btn-container absolute top-0 right-0 d-flex gap">
        <button
          className="button edit cursor"
          onClick={() => handleEditClick(_id)}
        >
          <span className="material-icons-outlined">edit</span>
        </button>
        <button
          className="button delete cursor"
          onClick={() => handleDeleteClick(_id)}
        >
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};
