import React, {useContext} from "react";
import {Context} from "../provider/mainProvider";
import {Home} from "./Home";

export const Start = () =>{
    const {email} = useContext(Context);
    return(
        <div className="o-row">
            {email ? <Home/>: "You are not logged in"}
        </div>
    )
}