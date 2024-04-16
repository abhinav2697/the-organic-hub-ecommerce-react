import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, CartProvider, AuthProvider, AlertProvider, AddressProvider } from "./context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
        <CartProvider>
          <AuthProvider>
            <AlertProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </AlertProvider> 
          </AuthProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);