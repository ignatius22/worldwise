import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CitiesProvider>
  </React.StrictMode>
);
