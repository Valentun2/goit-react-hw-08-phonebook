import { HeaderStyle,LinkStyle } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/userSlise";

const Header = () => {
    const dispatch = useDispatch();
    const handleClick =()=>{
dispatch(logOut())

}


    const userName = useSelector(state=>state.user.user.name)|| 'User'
    return ( <HeaderStyle>
        <h3>{userName }</h3>
        <LinkStyle onClick={handleClick} to={'login'}>{userName !== 'User' ? 'log out' : 'Log In'}</LinkStyle>
        
    </HeaderStyle> );
}
 
export default Header;


