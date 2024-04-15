import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { FilterProvider,CartProvider,AuthProvider, AddressProvider, } from './context';
import { Address } from './Pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <AuthProvider>
            <AddressProvider>
              <App />
              </AddressProvider>
            </AuthProvider>
          </CartProvider>
        </FilterProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
