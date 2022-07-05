import React, {useContext, useEffect} from "react";
import {Context} from "../../../provider/mainProvider";
import {useNavigate} from "react-router-dom";

export const AddedWallet = ()=>{
    const { setListOfWallets, valueNewWallet} = useContext(Context);
    const navigate = useNavigate();
    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch('http://localhost:3001/list-of-wallets', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });
                const content = await response.json();
                setListOfWallets(content)
            }
        )();
    },[])
    const addAnother = ()=>{
        navigate('../wallet/add')
    }
    const goToWallet = ()=>{
        navigate(`wallet/${valueNewWallet.id}`)
    }

    return (
        <div>
            <h1> A new wallet  " {valueNewWallet.nameWalled} " has been added. </h1>
            <button onClick={addAnother}>Add another</button>
        </div>
    )
}