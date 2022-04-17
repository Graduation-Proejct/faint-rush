import "./App.css";
import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Splash = lazy(() => import("./pages/splash"));
const GetStarted = lazy(() => import("./pages/getstarted"));

const Login = lazy(() => import("./pages/login"));
const PatientHome = lazy(() => import("./pages/patienthome"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patienthome" element={<PatientHome />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
