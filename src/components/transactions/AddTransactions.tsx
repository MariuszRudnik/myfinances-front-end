import React, {SyntheticEvent, useState} from "react";
import {POSTListOfWallets, Transaction} from "../../utils/dictionaries";
import {useParams} from "react-router-dom";

export const AddTransactions = ()=>{

    const [valueNewTransaction , setValueNewTransaction] = useState({
        nameTransactions: '',
        category: '',
        dateExpenses: "",
        price: 0,
    });
    const params = useParams();
    const { id:idWallet } = params;

    const newTransaction = async (e:SyntheticEvent) =>{
        e.preventDefault();
        await fetch(Transaction + idWallet, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                nameTransactions: valueNewTransaction.nameTransactions,
                category: valueNewTransaction.category,
                price: valueNewTransaction.price,
                dateExpenses: valueNewTransaction.dateExpenses
            })
        });
        console.log('sss')
    }


    return (
        <div>
            <h1>Add Transactions</h1>
                <form>
                    <input placeholder="Category" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        category: e.target.value
                    })}
                    />
                    <input placeholder="Name" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        nameTransactions: e.target.value
                    })}
                    />
                    <select>
                        <option>Expenses</option>
                        <option>Influence</option>
                    </select>

                    <input type="number" placeholder="Price"onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        price: Number(e.target.value)
                    })}
                    />
                    <input type="date" placeholder="dateExpenses" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        dateExpenses: e.target.value
                    })}
                    />
                    <button onClick={newTransaction} >Save</button>
                </form>

        </div>
    )
}