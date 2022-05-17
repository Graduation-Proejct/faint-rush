import "./App.css";
import "@material-tailwind/react/tailwind.css";
import { ToastContainer} from 'react-toastify';
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

const Splash = lazy(() => import("./pages/splash"));
const GetStarted = lazy(() => import("./pages/getstarted"));
const Login = lazy(() => import("./pages/login"));
const PatientHome = lazy(() => import("./pages/patienthome"));
const Edit = lazy(() => import("./pages/edit"));
const SignUp = lazy(() => import("./pages/signup"));
const SignUpNext = lazy(() => import("./pages/signupnext"));

const CareTaker = lazy(() => import("./pages/caretaker"));
const Test = lazy(() => import("./pages/test"));







function App() {
  
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const nev =()=>{
    console.log("inlog")

    navigate("/login");
  }
  function check(){
    if(user.valid==false){
     nev();

    }
    
    
return true;
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />

          {true&&<Route path="/patienthome" element={<PatientHome />} />}
          <Route path="/edit" element={<Edit />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupnext" element={<SignUpNext />} />
          <Route path="/test" element={<Test />} />

          <Route path="/caretaker" element={<CareTaker />} />


        </Routes>
      </Suspense>
      <ToastContainer/>
    </div>
  );
}

export default App;
