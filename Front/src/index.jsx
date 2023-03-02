import React from "react";
import ReactDOM from "react-dom/client";
import "css/index.css";
import AppRoute from "route/AppRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "store/store";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoute />
    </PersistGate>
  </Provider>
);
