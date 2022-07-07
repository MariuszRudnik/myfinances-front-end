import React, {useContext } from "react";
import {Context} from "../provider/mainProvider";

import {AddTransactions} from "../components/transactions/AddTransactions";
import {AddWalletComponent} from "../components/wallet/AddWallet/AddWalletComponent";
import {ListOfWallets} from "../components/wallet/ListOfWallet";

import {Route, Routes, useParams} from "react-router-dom";
import {AddWallet} from "../components/wallet/AddWallet";
import {AddedWallet} from "../components/wallet/AddWallet/AddedWallet";
import {TransactionList} from "../components/transactions/TransactionList";
import {Wallet} from "../components/wallet/wallet";



export const Home = () =>{

    // const params = useParams();
    // console.log('ddd')
    // console.log(params)
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