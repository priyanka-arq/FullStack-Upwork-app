import React from "react";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
