import React, {SyntheticEvent, useEffect, useState} from "react";
import {GETCategory, POSTExpenseCategory, POSTListOfWallets, Transaction} from "../../utils/dictionaries";
import {useNavigate, useParams} from "react-router-dom";

interface categoryIe {
    id: string;
    category: string;
}


export const AddTransactions = ()=>{
    const [category, setCategory] = useState({category:[]});
    const navigate = useNavigate();
    const [valueNewTransaction , setValueNewTransaction] = useState({
        nameTransactions: '',
        category: 'Other',
        dateExpenses: "",
        price: 0,
        operations: "Expenses"
    });
    const params = useParams();
    const { id:idWallet } = params;
    useEffect(()=>{
        (async ()=>{
            const response = await fetch(GETCategory,{
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
            })
                .then(response => response.json())
                .then(data => setCategory(data));
                console.log(category)
        })()
    },[]);
    const addListCategory = category.category.map((category:categoryIe)=>(
        <option key={category.id}>{category.category}</option>
    ))

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
                operations: valueNewTransaction.operations,
                dateExpenses: valueNewTransaction.dateExpenses
            })
        });
        navigate('added')
    }

    return (
        <div className="u-flex u-flex__column">
            <h1>Add Transactions</h1>
                <form  className="u-flex u-flex__column">

                    <select className="t-site-form__input" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        category: e.target.value
                    } )}>
                        <option>Other</option>
                        <option >Food</option>
                        <option>Home</option>
                        <option>Transport</option>
                        <option>Entertainment</option>
                        {addListCategory}
                    </select>
                    <p>You can add more category. </p>

                    <input className="t-site-form__input" placeholder="Name" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        nameTransactions: e.target.value
                    })}
                    />
                    <select className="t-site-form__input" onChange={e=> setValueNewTransaction({
                            ...valueNewTransaction,
                           operations: e.target.value
                        } )}>
                        <option >Expenses</option>
                        <option>Influence</option>
                    </select>

                    <input className="t-site-form__input" type="number" placeholder="Price"onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        price: Number(e.target.value)
                    })}
                    />
                    <input className="t-site-form__input" type="date" placeholder="dateExpenses" onChange={e=> setValueNewTransaction({
                        ...valueNewTransaction,
                        dateExpenses: e.target.value
                    })}
                    />
                    <button className="t-site-form__button" onClick={newTransaction} >Save</button>
                </form>

        </div>
    )
}