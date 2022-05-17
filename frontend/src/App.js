import "./App.css";
import "@material-tailwind/react/tailwind.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setPhone,
  setType,
  setUsername,
  setValid,
  setList,
} from "./redux/userSlice";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteSignUp from "./components/PrivateRouteSignUp";

const Splash = lazy(() => import("./pages/splash"));
const GetStarted = lazy(() => import("./pages/getstarted"));
const Login = lazy(() => import("./pages/login"));
const PatientHome = lazy(() => import("./pages/patienthome"));
const Edit = lazy(() => import("./pages/edit"));
const SignUp = lazy(() => import("./pages/signup"));
const SignUpNext = lazy(() => import("./pages/signupnext"));

const CareTaker = lazy(() => import("./pages/caretaker"));
const Faint = lazy(() => import("./pages/faint"));
const SOS = lazy(() => import("./pages/sos"));

const Test = lazy(() => import("./pages/test"));







function App() {

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  




  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />

          <Route path="/patienthome" element={
            <PrivateRoute><PatientHome /></PrivateRoute>
          } />

          <Route path="/edit" element={
            <PrivateRoute><Edit /></PrivateRoute>
          } />
          <Route path="/signup" element={
            <PrivateRouteSignUp><SignUp /></PrivateRouteSignUp>
          } />
          <Route path="/signupnext" element={
            <PrivateRoute><SignUpNext /></PrivateRoute>
          } />

          <Route path="/test" element={
            <Test />} />
          <Route path="/faint" element={
            <Faint />} />
          <Route path="/sos" element={
            <PrivateRoute><SOS /></PrivateRoute>
          } />



          <Route path="/caretaker" element={
            <PrivateRoute><CareTaker /></PrivateRoute>
          } />

        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
