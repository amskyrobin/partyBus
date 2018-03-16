import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import rootReducer from "./reducers/index";
const store = createStore(rootReducer);

import Container from "./Components/Container.js";

window.onload = function() {
  ReactDOM.render(
    <StoreProvider store={store}>
      <Container />
    </StoreProvider>,
    document.getElementById("app")
  );
};
