import React, {SyntheticEvent, useState} from "react";
import {POSTListOfWallets} from "../../utils/dictionaries";
import {useParams} from "react-router-dom";

export const  AddWallet = ( )=>{
    const [valueNewWallet, setValueNewWallet] = useState({
        nameWalled: "",
        openingBalance: 0,
        chooseACurrency: "PLN"
    });


    const  handleClick = async (e:SyntheticEvent) => {
        const { nameWalled , openingBalance , chooseACurrency} = valueNewWallet;
        if(nameWalled.length > 2 ){
            e.preventDefault();
            await fetch(POSTListOfWallets, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
                body: JSON.stringify({
                    nameWalled ,
                    openingBalance ,
                    chooseACurrency
                })
            });
        } else {
            alert("The name is too short")
        }
    }

    return (
        <div>
            <h1>Add Wallet</h1>
            <label>
                <input type="text" placeholder="Name Wallet" onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    nameWalled: e.target.value
                })}/>
                <input type="number" placeholder="Opening Balance"  onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    openingBalance: Number(e.target.value)
                })}/>
                <select onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    chooseACurrency: e.target.value
                })}>
                    <option>PLN</option>
                    <option>USD</option>
                    <option>EURO</option>
                </select>
                <button onClick={handleClick}>Save</button>
            </label>

        </div>
    )
}