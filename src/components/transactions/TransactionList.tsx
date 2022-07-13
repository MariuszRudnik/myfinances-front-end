import React, {useContext, useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import "./style.scss";
import {GETTransactionExpenses, LOGInHost, POSTListOfWallets, Transaction} from "../../utils/dictionaries";
import {Context} from "../../provider/mainProvider";
import {ChartsTransaction} from "./charts/charts-transaction";
import {InfoTransactions} from "./InfoTransactions";

interface transactionList {
    id: string;
    nameTransactions?: string;
    category?: string;
    price?: number;
    dateExpenses?: string;
    operations?: string;
}
interface getWallet {
    id?: string,
    userId?: string,
    nameWalled?: string,
    openingBalance?: number,
    chooseACurrency?: string

}


export const TransactionList = () => {
    const {counter, setCounter} = useContext(Context);
    const [transactionList, setTransactionList] = useState([{
        id: "Loading",
        nameTransactions: "Loading",
    }]);
    const [openWallet, setOpenWallet] = useState({});
    const [expensesValue, setExpensesValue] = useState({
        expenses: 0,
        influence: 0
    });

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
                const contentGet = await response.json();
                setTransactionList(contentGet);

                const walletSetting = await fetch( POSTListOfWallets  + idWallet , {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });
                const GetWalletSetting = await walletSetting.json();
                const wallet:getWallet = (GetWalletSetting[0]);
                setOpenWallet(wallet);

                const value = await fetch( GETTransactionExpenses + idWallet , {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });

                const valueGet = await value.json();
                setExpensesValue(valueGet);
            }

        )();
    },[counter]);
    const getStartWallet:getWallet = openWallet;

    const DeleteTransaction = async (id: string) =>{

        await fetch(Transaction + id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",

        });
        setCounter(counter+1)
    }

    const list = transactionList.map((transaction:transactionList) => (
        <li key={transaction.id}>
            <div className="transaction">
                <div className="transaction__properties">
                    {transaction.operations === 'Expenses'?
                        <p className="transaction__name">{transaction.nameTransactions} </p>:
                        <p className="transaction__name--green">{transaction.nameTransactions} </p> }
                    <p className="transaction__price">{transaction.price} {getStartWallet.chooseACurrency} </p>
                    <p className="transaction__category">{transaction.category} </p>

                </div>
                <div className="transaction__box">
                    <button onClick={()=>DeleteTransaction(transaction.id)} className="transaction__delete"> Delete</button>
                    <p>{transaction.dateExpenses}</p>
                </div>

            </div>
        </li>
    ))

    return (

        <div className="o-transaction">
            <div className="u-flex">
                <ChartsTransaction expensesValue={expensesValue} getStartWallet={getStartWallet.chooseACurrency} />
                <InfoTransactions expensesValue={expensesValue} getStartWallet={getStartWallet.chooseACurrency}/>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}