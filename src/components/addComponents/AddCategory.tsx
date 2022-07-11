import React, {SyntheticEvent, useState} from "react";
import { POSTExpenseCategory} from "../../utils/dictionaries";
import {useNavigate} from "react-router-dom";

export const AddCategory = () =>{
    const [categoryName, setCategoryName] =useState('');
    const navigate = useNavigate();
    const addCategoryValue = async (e:SyntheticEvent) =>{
        e.preventDefault();
        await fetch(POSTExpenseCategory, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                categoryName: categoryName
            })
        });
        navigate('../addTranslation')
    }


    return (
        <div className="u-flex u-flex__column">
            <h1 className="t-site-form__h1">Add an expense category.</h1>
            <div id="addCategory" className="u-flex u-flex__column">
                <input   className="t-site-form__input"  onChange={e=> setCategoryName(e.target.value)} type="text"/>
                <button className="t-site-form__button" onClick={addCategoryValue}>Save</button>
            </div>
            {/*<div id="addedCategory">*/}
            {/*    <p>Congratulations ! Add a new category.</p>*/}
            {/*    Now you can add a  <button>new transaction</button> or <button>add another category</button>*/}
            {/*</div>*/}
        </div>
    );
}