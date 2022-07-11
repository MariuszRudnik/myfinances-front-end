import React, {useContext, useEffect} from "react";
import {Context} from "../../provider/mainProvider";
import {Link, NavLink} from "react-router-dom";



interface walletMap {
    id: string | null;
    nameWalled: string | null;
    openingBalance?: number | null;
    chooseACurrency?: string | null;
}

export const ListOfWallets = ()=> {
    const {listOfWallets, setListOfWallets, setCounter, counter} = useContext(Context);

    const countClick = ()=>{
        setCounter(counter+1)
    };

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
            <NavLink key={wallet.id} onClick={countClick} to={`/wallet/${wallet.id}`}>{wallet.nameWalled}</NavLink>
    ))

    return (
        <div>
            <div className="t-nav__heading"><p> List of Wallets </p></div>
            <nav>
                <Link to="/wallet/add">Add Wallet</Link>
                <div className="c-list">
                {list}
                </div>
            </nav>
        </div>
    )
}