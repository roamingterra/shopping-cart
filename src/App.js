import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Shopping from "./components/Shopping.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
      </Routes>
    </div>
  );
}

export default App;
