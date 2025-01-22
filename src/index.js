import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./features";

import { store } from "./features/index";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
