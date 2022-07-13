import React, {useContext} from "react";
import {Context} from "../provider/mainProvider";
import {Home} from "./Home";

export const Start = () =>{
    const {email} = useContext(Context);
    const Info = ()=>{
        return(
            <div>
                <h1>You are not logged in</h1>

                <p>The application is used to manage expenses. Create an account.</p>
                <p> Add your virtual wallet and save expenses. Break down your expenses into categories. And write down your expenses.</p>
                Good luck saving your money ;)
            </div>
        )
    }

    return(
        <>
        <div className="">
            {email ? <Home/>: <Info/>}

        </div>

        </>
    )
}