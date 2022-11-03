import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mycomponent" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
