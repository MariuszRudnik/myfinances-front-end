import React, {useContext } from "react";
import {Context} from "../provider/mainProvider";

import {AddTransactions} from "../components/transactions/AddTransactions";
import {AddWalletComponent} from "../components/wallet/AddWallet/AddWalletComponent";
import {ListOfWallets} from "../components/wallet/ListOfWallet";

import {Route, Routes, useParams} from "react-router-dom";
import {AddWallet} from "../components/wallet/AddWallet";
import {AddedWallet} from "../components/wallet/AddWallet/AddedWallet";
import {Wallet} from "../components/wallet/Wallet";



export const Home = () =>{
    return (
        <>
            <nav className="t-nav">
                <ListOfWallets/>
            </nav>
            <Routes>
                <Route path="/wallet/add" element={<AddWallet/>}/>
                <Route path="/wallet/added" element={<AddedWallet/>}/>
                <Route path="/wallet/:id/*" element={<Wallet/>}/>
            </Routes>
        </>

    )
}