import React, { Component } from "react";
import { Provider } from "react-redux";

import Page from "./Page";
import { store } from "../src/common/redux/store";

export default ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
};
