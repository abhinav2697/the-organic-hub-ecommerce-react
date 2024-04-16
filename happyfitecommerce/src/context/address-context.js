import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    number: "",
    address: "",
    landmark: "",
    isChecked: false
  });

  const [newAddress, setNewAddress] = useState([]);

  const [selected, setSelected] = useState(false);

  return (
    <AddressContext.Provider
      value={{ userDetails, setUserDetails, newAddress, setNewAddress, selected, setSelected }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
