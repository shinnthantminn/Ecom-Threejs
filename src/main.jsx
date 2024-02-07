import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products.context.jsx";
import { WindowProvider } from "./context/Window.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </WindowProvider>
  </React.StrictMode>
);
