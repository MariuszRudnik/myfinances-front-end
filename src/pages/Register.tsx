import React, {SyntheticEvent, useState} from "react";
import { REGISTERHost } from "../utils/dictionaries";

export const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e:SyntheticEvent) =>{
        e.preventDefault();
        const response = await fetch(REGISTERHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                pwd:password,
            })
        })
        const content = await response.json();

        console.log(content);

    }

    return (
            <form onSubmit={submit} >
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <input type="email" className="form-control" placeholder="Email adress" required
                    onChange={e=> setEmail(e.target.value)}
                />
                <input type="password" className="form-control"  placeholder="Password" required
                       onChange={e=> setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
    )
}