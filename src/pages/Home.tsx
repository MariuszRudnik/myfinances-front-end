import React, {useContext } from "react";
import {Context} from "../provider/mainProvider";


export const Home = () =>{
    const {email} = useContext(Context);
    return (
        <div>
            {email ? 'Hi ' + email : "You are not logged in"}
        </div>
    )
}