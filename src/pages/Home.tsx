import React, {useContext } from "react";
import {Context} from "../provider/mainProvider";

import {AddTransactions} from "../components/transactions/AddTransactions";
import {AddWallet} from "../components/wallet/AddWallet";
import {ListOfWallets} from "../components/wallet/ListOfWallet";

import {Route, Routes, useParams} from "react-router-dom";
// {email ? 'Hi ' + email : "You are not logged in"}


export const Home = () =>{
    const {email} = useContext(Context);
    const params = useParams();
    console.log('ddd')
    console.log(params)
    return (
        <>
            <div>
                <ul>
                    <li>Add</li>
                    <li>Operations</li>
                    <li>Overview</li>
                    <li>Summary</li>
                    <li>Reports</li>
                    <li>Wallet</li>
                </ul>
                <ListOfWallets/>
            </div>
            <Routes>
                <Route path="/wallet/add" element={<AddWallet/>}/>
                <Route path="/wallet/:id" element={<AddTransactions/>}/>
            </Routes>
        </>
    )
}