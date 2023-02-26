import React from "react";
import ReactDOM from "react-dom/client";
import "css/index.css";
import AppRoute from "route/AppRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
