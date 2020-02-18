import { combineReducers } from "redux";

interface Action {
  type: string;
  query: string;
}

const initialState = {
  query: ""
};

export const search = (state = initialState, {query, type}: Action) => {
  if (type === "UPDATE_SEARCH") return {...state, query};
  return state;
};

export const reducers = combineReducers({
  search,
});
