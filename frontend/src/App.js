import "./App.css";
import Splash from "./pages/Splash";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/splash" element={<Splash />}>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
