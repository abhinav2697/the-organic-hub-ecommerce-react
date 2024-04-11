import {  createContext, useContext, useState } from "react";
const AlertContext = createContext();

const AlertProvider = ({ Children }) => {
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type:"success"
    })

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>{Children}</AlertContext.Provider>

    )
}

const useAlert = () => useContext(AlertContext);
export { useAlert, AlertProvider };