import * as React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "styles/index.scss";
import AppComponent from "components/App";
import reducer from "reducers";
import Api from "api";

const api = new Api();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

export default App;
