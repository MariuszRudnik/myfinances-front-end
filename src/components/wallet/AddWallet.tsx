import React, {useContext, useState} from "react";
import {AddWalletComponent} from "./AddWallet/AddWalletComponent";
import {Context} from "../../provider/mainProvider";
import {AddedWallet} from "./AddWallet/AddedWallet";



export const  AddWallet = () =>{
    const  addWallets = false;
    return (
        <>
            {addWallets? <AddedWallet/>: <AddWalletComponent/>  }
        </>
    )
}