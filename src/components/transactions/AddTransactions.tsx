import React from "react";

export const AddTransactions = ()=>{
    return (
        <div>
            <h1>Add Transactions</h1>
                <form>
                    <input placeholder="Category"/>
                    <input placeholder="Name"/>
                    <select>
                        <option>Expenses</option>
                        <option>Influence</option>
                    </select>
                    <input type="number" placeholder="Price"/>
                    <input type="date" placeholder="dateExpenses"/>
                    <input type="text" placeholder="Wallet"/>
                    <button>Save</button>
                </form>

        </div>
    )
}