import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "redux/selectors";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useSelector(getUser);

    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;}