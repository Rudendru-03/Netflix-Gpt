import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import appstore from "./Store/store";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
