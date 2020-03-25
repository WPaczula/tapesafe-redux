import * as React from "react";
import { Provider } from "react-redux";
import createStore from "store/createStore";
import AppComponent from "features/app/App";
import "styles/index.scss";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Provider store={createStore()}>
      <AppComponent />
    </Provider>
  );
};

export default App;
