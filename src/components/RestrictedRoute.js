import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from 'redux/selectors';



export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
const {isLoggedIn} = useSelector(getUser)

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};