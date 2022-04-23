import "./App.css";
import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Splash = lazy(() => import("./pages/splash"));
const GetStarted = lazy(() => import("./pages/getstarted"));
const Login = lazy(() => import("./pages/login"));
const PatientHome = lazy(() => import("./pages/patienthome"));
const Edit = lazy(() => import("./pages/edit"));
const SignUp = lazy(() => import("./pages/signup"));
const CareTaker = lazy(() => import("./pages/caretaker"));






function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />

          <Route path="/patienthome" element={<PatientHome />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/caretaker" element={<CareTaker />} />


        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
