import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "store";
import Api from "features/users/api";
import thunk from "redux-thunk";

const api = new Api();

export default () =>
  createStore(
    store,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );
