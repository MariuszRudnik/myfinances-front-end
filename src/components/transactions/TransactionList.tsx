import React, {useEffect} from "react";
import {Link, Route, Routes, useParams} from "react-router-dom";

import {AddWallet} from "../wallet/AddWallet";
import {AddedWallet} from "../wallet/AddWallet/AddedWallet";
import {AddTransactions} from "./AddTransactions";

export const TransactionList = () => {
    const params = useParams();
    const { id:idWallet } = params;
    // useEffect(()=>{
    //     (
    //         async ()=>{
    //             const response = await fetch(GETTransaction + idWallet , {
    //                 method: 'GET',
    //                 headers: {'Content-Type': 'application/json'},
    //                 credentials: "include",
    //             });
    //             const content = await response.json();
    //             console.log(content)
    //         }
    //     )();
    // },[])

    return (
        <div>
            <Link to="addTranslation">Add transation</Link>
            <h1>Transaction</h1>
            <ul>
                <li>Lista</li>
            </ul>

            <Routes>
                <Route path="/addTranslation" element={<AddTransactions/>}/>
            </Routes>
        </div>
    )
}