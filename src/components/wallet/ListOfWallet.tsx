import React, {useContext, useEffect} from "react";
import {Context} from "../../provider/mainProvider";
import {Link} from "react-router-dom";
import walletIcon from '../../images/wallet.png'


interface walletMap {
    id: string | null;
    nameWalled: string | null;
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
            <div className="t-nav__heading"><img src={walletIcon} className="t-nav__iCom" /> <p> List of Wallets </p></div>
            <ul>
                <li><Link to="/wallet/add">Add Wallet</Link></li>
                {list}
            </ul>
        </div>
    )
}