import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useParams} from "react-router-dom";
import {AddTransactions} from "./AddTransactions";
import "./style.scss";
import {AddedTransactions} from "./AddedTransactions";

interface transactionList {
    id: string;
    nameTransactions?: string;
    category?: string;
    price?: number;
    dateExpenses?: string;
    operations?: string;
}


export const TransactionList = () => {
    const [transactionList, setTransactionList] = useState([{
        id: "Loading",
        nameTransactions: "Loading",
    }])

    const params = useParams();
    const { id:idWallet } = params;
    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch('http://localhost:3001/transactions/95927ed7-2344-410b-ad44-42f28bcdc31b', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });
                const content = await response.json();
                setTransactionList(content);
            }
        )();
    },[]);

    transactionList.map((transaction:transactionList) => (console.log(typeof transaction.dateExpenses)))

    const list = transactionList.map((transaction:transactionList) => (

        <li key={transaction.id}>
            <div className="transaction">
                <p>{transaction.nameTransactions} </p>
                <p>{transaction.category} </p>
                <p>{transaction.price} </p>
                <p>{transaction.dateExpenses}</p>
            </div>
        </li>
    ))
    console.log('----')
    console.log(list)

    return (
        <div>
            <Link to="addTranslation">Add transation</Link>
            <h1>Transaction</h1>
            <ul>
                {list}
            </ul>

            <Routes>
                <Route path="/ss" element={<AddTransactions/>}/>
                <Route path="/addTranslation" element={<AddTransactions/>}/>
                <Route path="/addedTranslation" element={<AddedTransactions/>}/>
            </Routes>
        </div>
    )
}