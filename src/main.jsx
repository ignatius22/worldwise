import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CitiesProvider } from "./contexts/CitiesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesProvider>
      <App />
    </CitiesProvider>
  </React.StrictMode>
);
