import { Navigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import PatientHome from "../../pages/patienthome";
import {
  setEmail,
  setPassword,
  setPhone,
  setType,
  setUsername,
  setValid,
  setList,
} from "../../redux/userSlice";

const PrivateRoute = ({children}) => {
    const user = useSelector((state) => state.user);
//if(user.valid){return }else{ return <Navigate to="/login"/>} 
 return user.valid? 
 children
 
 
 :<Navigate to="/login"/>;


}

export default PrivateRoute;