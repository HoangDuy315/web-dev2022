import "./App.css";
// import { Route, Redirect, Switch } from "react-router-dom";
// import MyComponent from "./components/MyComponent";
import * as React from "react";

function App() {
  const [MyComponent, setMyComponent] = React.useState(() => () => null);

  React.useEffect(() => {
    import("./components/MyComponent").then((module) => {
      setMyComponent(() => module.default);
    });
  }, []);

  return <MyComponent />;
}

export default App;
