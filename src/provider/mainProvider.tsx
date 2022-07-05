import React, {createContext, PropsWithChildren, useEffect, useState} from "react";
import {GETUserHost} from "../utils/dictionaries";

export const Context = createContext<null | string | any >(null);

export const MainProvider = (props:PropsWithChildren)=>{
    const [email, setEmail] = useState('');

    // -----  List of Wallet
    const [listOfWallets, setListOfWallets] = useState([]);
    //----
    const [valueNewWallet, setValueNewWallet] = useState({
        nameWalled: "",
        openingBalance: 0,
        chooseACurrency: "PLN"
    });


    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch(GETUserHost, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });
                const content = await response.json();
                setEmail(content.email)
            }
        )();
    })

    return (
        <Context.Provider value={{
            email, setEmail,
            listOfWallets, setListOfWallets,
            valueNewWallet, setValueNewWallet
        }}>
                {props.children}
        </Context.Provider>
    )
}