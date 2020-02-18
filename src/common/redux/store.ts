import { createStore, compose } from "redux";
import { reducers } from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const windowExist = typeof window === "object";
const composeEnhancers = (windowExist && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducers, composeEnhancers());

export type State = {
  search: { query: string };
};
