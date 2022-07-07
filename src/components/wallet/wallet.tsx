import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {AddWallet} from "./AddWallet";
import {AddedWallet} from "./AddWallet/AddedWallet";
import {AddTransactions} from "../transactions/AddTransactions";
import {AddedTransactions} from "../transactions/AddedTransactions";
import {ListOfWallets} from "./ListOfWallet";
import {TransactionList} from "../transactions/TransactionList";
import {Category} from "./Category";

export const Wallet = ()=> {
    return(
        <>
            <div className="o-wallet">
        <nav className="o-wallet__nav">
            <NavLink to="">Wallet</NavLink>
            <NavLink to="addTranslation">Add Transactions</NavLink>
            <NavLink to="category">Add Category</NavLink>
            <NavLink to="category">Settings</NavLink>
        </nav>


            <Routes>
                <Route path="/" element={<TransactionList/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/addTranslation" element={<AddTransactions/>}/>
                <Route path="/addTranslation/added" element={<AddedTransactions/>}/>
            </Routes>
            </div>
        </>
    )
}
