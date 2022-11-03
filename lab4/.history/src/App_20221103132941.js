import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MyComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
