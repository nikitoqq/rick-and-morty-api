import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { store } from "./features/index";
import { Provider } from "react-redux";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
