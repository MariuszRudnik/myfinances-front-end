import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { LOGOutHost} from "../../utils/dictionaries";
import {Context} from "../../provider/mainProvider";


const Nav = () => {
    const {email, setEmail} = useContext(Context);
    const logout = async ()=>{ await fetch(LOGOutHost, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        });
        setEmail(undefined)
    }

    let menu;

    if(email === undefined ){
        menu = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="login" className="nav-link active"  >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="register" className="nav-link active"  >Register</Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="login" onClick={logout} className="nav-link active">Logout</Link>
                </li>
            </ul>
        )
    }


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;