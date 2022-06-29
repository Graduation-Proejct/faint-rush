import "./App.css";


import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFireBaseServer, setSocket } from "./redux/userSlice";
import { SocketContext, socket } from "./services/Socket";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteSignUp from "./components/PrivateRouteSignUp";
import axios from "axios";
import { useEffect } from "react";

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
const Info = lazy(() => import("./pages/info"));

function App() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/patienthome"
              element={
                <PrivateRoute>
                  <PatientHome />
                </PrivateRoute>
              }
            />

            <Route
              path="/edit"
              element={
                <PrivateRoute>
                  <Edit />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRouteSignUp>
                  <SignUp />
                </PrivateRouteSignUp>
              }
            />
            <Route
              path="/signupnext"
              element={
                <PrivateRoute>
                  <SignUpNext />
                </PrivateRoute>
              }
            />

            <Route path="/test" element={<Test />} />
            <Route path="/info" element={<Info />} />
            <Route path="/faint" element={<Faint />} />
            <Route
              path="/sos"
              element={
                <PrivateRoute>
                  <SOS />
                </PrivateRoute>
              }
            />

            <Route
              path="/caretaker"
              element={
                <PrivateRoute>
                  <CareTaker />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Splash />} />
            <Route path="*" element={<Splash />} />

          </Routes>
        </Suspense>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
