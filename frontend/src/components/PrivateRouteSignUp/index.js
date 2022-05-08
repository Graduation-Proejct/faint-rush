import { Navigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import PatientHome from "../../pages/patienthome";


const PrivateRoute = ({children}) => {
    const user = useSelector((state) => state.items);
//if(user.valid){return }else{ return <Navigate to="/login"/>} 
 return user.signUpValue? 
 children
 
 
 :<Navigate to="/"/>;


}

export default PrivateRoute;