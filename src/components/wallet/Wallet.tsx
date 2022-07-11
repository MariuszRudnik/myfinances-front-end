import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {AddTransactions} from "../transactions/AddTransactions";
import {AddedTransactions} from "../transactions/AddedTransactions";
import {TransactionList} from "../transactions/TransactionList";
import {AddCategory} from "../addComponents/AddCategory";

export const Wallet = ()=> {

    return(
        <>
            <div className="o-wallet">
            <nav className="o-wallet__nav">
                <NavLink to="">Wallet</NavLink>
                <NavLink to="addTranslation">Add Transactions</NavLink>
                <NavLink to="category">Add Category</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<TransactionList/>}/>
                <Route path="/category" element={<AddCategory/>}/>
                <Route path="/addTranslation" element={<AddTransactions/>}/>
                <Route path="/addTranslation/added" element={<AddedTransactions/>}/>
            </Routes>
            </div>
        </>
    )
}
