import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "containers/store/context/usercontext";
import App from "./containers/app";
import { AmountProvider } from "containers/store/context/amountContext";
import { CartProvider } from "containers/store/context/cartContext";
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AmountProvider>
          <CartProvider>
            <Normalize />
            <App />
          </CartProvider>
        </AmountProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
