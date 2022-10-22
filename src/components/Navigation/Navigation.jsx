import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contacts" end>My contacts</NavLink></li>
        </ul>
    
      
    )
}

export default Navigation;