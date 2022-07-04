import React, {SyntheticEvent, useContext, useState} from "react";
import {GETUserHost, LOGInHost} from "../utils/dictionaries";
import {useNavigate} from "react-router-dom";
import {Context} from "../provider/mainProvider";

export const Login = ()=>{
    const {setEmail} = useContext(Context);
    const navigate = useNavigate();
    const [typedEmail, setTypedEmail] = useState('');
    const [password, setPassword] = useState('');

    const submin = async (e:SyntheticEvent) =>{
        e.preventDefault();
         await fetch(LOGInHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email: typedEmail,
                pwd:password,
            })
        });
        const response = await fetch(GETUserHost, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
        });
        const content = await response.json();
        setEmail(content.email)

        console.log('LockIn');
        console.log(content);
        navigate('/');
    }

    return(
        <header className="App-header">
                <form onSubmit={submin}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input type="email" className="form-control" placeholder="Email adress" required
                           onChange={e=> setTypedEmail(e.target.value)}/>
                    <input type="password" className="form-control"  placeholder="Password" required
                           onChange={e=> setPassword(e.target.value)}/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
        </header>
    )
}