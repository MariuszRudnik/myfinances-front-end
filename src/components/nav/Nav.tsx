import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { LOGOutHost} from "../../utils/dictionaries";
import {Context} from "../../provider/mainProvider";
import walletIcon from "../../images/wallet.png";
import listMenu from "../../images/menu.png"

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
            <div >
                        <Link className="t-site-header__link" to="login"  >Login</Link>
                        <Link  className="t-site-header__link" to="register">Register</Link>
            </div>
        )
    } else {
        menu = (
            <div>
                    <Link className="t-site-header__link" to="login" onClick={logout}>Logout</Link>

            </div>
        )
    }


    return (
        <div className="t-site-header">

            <nav className="o-container t-site-header__nav ">
                <div className="t-site-header__center">
                    {/*<img src={listMenu} className="t-site-header__logoImg" />*/}
                </div>
                <Link className="t-site-header__home" to="/">
                     <div className="t-site-header__home">
                        <div>
                            <img src={walletIcon} className="t-site-header__logoImg" />
                        </div>
                        <div className="t-site-header__logoText">My Finances </div>
                     </div>
                </Link>
                <div className="t-site-header__center">
                    {menu}
                </div>
             </nav>
        </div>
    );
};

export default Nav;