import React, {SyntheticEvent, useState} from "react";
import {LOGInHost} from "../utils/dictionaries";
import {useNavigate} from "react-router-dom";

export const Login = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submin = async (e:SyntheticEvent) =>{
        e.preventDefault();
        console.log('Lock In');
        await fetch(LOGInHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email,
                pwd:password,
            })
        });
        navigate('/');
    }

    return(
        <header className="App-header">
                <form onSubmit={submin}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input type="email" className="form-control" placeholder="Email adress" required
                           onChange={e=> setEmail(e.target.value)}/>
                    <input type="password" className="form-control"  placeholder="Password" required
                           onChange={e=> setPassword(e.target.value)}/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
        </header>
    )
}