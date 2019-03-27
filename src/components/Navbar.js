import React from "react";
import { withUser } from "../provider/UserProvider";
import { Link } from "react-router-dom";


const Navbar = ({user}) => {

    return(
        <nav className="navbar">
            <Link className="navbar__user" to="/user">
                <img 
                    className="navbar__user-icon"
                    src={user.avatar} 
                    alt="user icon"
                />
                <h3>Welcome {user.firstName}</h3>
            </Link>
            <div className="navbar__links">
                <Link to="/user/edit" className="btn" >
                    Account
                </Link>
            </div>
        </nav>
    )
}


const NavbarWithUser = withUser(Navbar);
export { NavbarWithUser };