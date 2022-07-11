import React from 'react';
interface value {
    expenses: number,
    influence: number
}
export const InfoTransactions = ({expensesValue, getStartWallet}:any | value)=>{


    return(
        <div className="info">
            <p>You have already spent {expensesValue.expenses} {getStartWallet}.</p>
            <p>You had {expensesValue.influence} {getStartWallet} of income.</p>
            <p>{expensesValue.expenses >= expensesValue.influence?'You spend too much. Try to save some money.': 'Way to go. Keep it up.'}</p>
        </div>
    )
}