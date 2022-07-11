import React, {SyntheticEvent, useContext, useState} from "react";
import {POSTListOfWallets} from "../../../utils/dictionaries";
import {useNavigate, useParams} from "react-router-dom";
import {Context} from "../../../provider/mainProvider";



export const  AddWalletComponent = ( )=>{
    const navigate = useNavigate();
    const {valueNewWallet, setValueNewWallet} = useContext(Context);

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
             navigate('/wallet/added')
        } else {
            alert("The name is too short")
        }
    }

    return (
        <div className="u-flex u-flex__column t-site-form">
            <h1 className="t-site-form__h1">Add Wallet</h1>
            <label className="u-flex u-flex__column" >
                <input className="t-site-form__input" type="text" placeholder="Name Wallet" onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    nameWalled: e.target.value
                })}/>
                <input className="t-site-form__input" type="number" placeholder="Opening Balance"  onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    openingBalance: Number(e.target.value)
                })}/>
                <select className="t-site-form__input" onChange={e=> setValueNewWallet({
                    ...valueNewWallet,
                    chooseACurrency: e.target.value
                })}>
                    <option>PLN</option>
                    <option>USD</option>
                    <option>EURO</option>
                </select>
                <button className="t-site-form__button" onClick={handleClick}>Save</button>
            </label>

        </div>
    )
}