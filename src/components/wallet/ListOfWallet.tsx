import React, {useContext, useEffect} from "react";
import {GETUserHost} from "../../utils/dictionaries";
import {Context} from "../../provider/mainProvider";
import {Link} from "react-router-dom";

interface walletMap {
    id?: string | null;
    nameWalled?: string | null;
    openingBalance?: number | null;
    chooseACurrency?: string | null;
}

export const ListOfWallets = ()=> {
    const {listOfWallets, setListOfWallets} = useContext(Context);

    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch('http://localhost:3001/list-of-wallets', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: "include",
                });
                const content = await response.json();
                console.log(content)
                setListOfWallets(content)
            }
        )();
    },[])

    const list = listOfWallets.map((wallet:walletMap) => (
        <li key={wallet.id}>
            <Link to={`/wallet/${wallet.id}`}>{wallet.nameWalled}</Link>
        </li>
    ))



    return (
        <div>
            <h1>List of Wallets</h1>
            <ul>
                <li><Link to="/wallet/add">Add Wallet</Link></li>
                {list}
            </ul>
        </div>
    )
}