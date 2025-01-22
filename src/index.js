import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { store } from "./features/index";
import { Provider } from "react-redux";
import { persistor } from "./features";
import { PersistGate } from "redux-persist/integration/react";

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
