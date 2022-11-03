import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MyComponent} />
    </Switch>
  );
}

export default App;
