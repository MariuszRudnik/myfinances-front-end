import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {AddTransactions} from "./AddTransactions";
import "./style.scss";
import {AddedTransactions} from "./AddedTransactions";
import {Transaction} from "../../utils/dictionaries";

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
                const response = await fetch( Transaction + idWallet , {
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
                <div className="transaction__properties">
                    <p className="transaction__name">{transaction.nameTransactions} </p>
                    <p className="transaction__price">{transaction.price} </p>
                    <p className="transaction__category">{transaction.category} </p>
                </div>
                <div>
                    <p>{transaction.dateExpenses}</p>
                </div>

            </div>
        </li>
    ))

    return (
        <div className="o-transaction">
            <ul>
                {list}
            </ul>
        </div>
    )
}