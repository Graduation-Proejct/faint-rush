import "./App.css";
import Splash from "./pages/splash";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
