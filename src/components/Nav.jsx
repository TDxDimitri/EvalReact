import { NavLink } from "react-router-dom";

const Nav = () => {
    const checkIsActive = ({isActive}) => {
        return{
            color: isActive ? 'red' : 'black',
        }
    }
    return (
        <nav>
            <ul>
                <li>
                    <NavLink style={checkIsActive} to="/add">Gestion</NavLink>
                </li>

                <li>
                    <NavLink style={checkIsActive}  to="/form">form</NavLink>
                </li>            
            </ul>
        </nav>
    );
}
export default Nav;