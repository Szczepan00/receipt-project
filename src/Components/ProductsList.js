import React, {useState} from 'react';
import db from '../firebase'
import {doc, setDoc} from "firebase/firestore/lite";

export function ProductsList({item, cost, basket, resetAllProducts, resetTotalCost}) {

   const [date, setDate]  = useState(new Date());
    const day = date.toLocaleDateString();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm';
    const charsNumber = 20;

    const saveData = async () => {
        const idGenerator = () => {
            let code = '';
            for (let i = 0; i < charsNumber; i++) {
                const index = Math.floor(Math.random() * chars.length);
                code += chars[index];
            }
            return code;
        }
        await setDoc(doc(db, "bills", idGenerator()), {basket, day, hours, minutes, cost});
        resetAllProducts([]);
        resetTotalCost(0);
    }

    // const saveData = async () => {
    //
    //     await setDoc(doc(db, "bills", "produkty"), {basket, day, time});
    // }

    return (
        <div className="mt-4">
            <h2 className="pb-2">Twoje zakupy:</h2>
            <ul className="list-group">
                {item}
                <span className="text-end fw-bold p-3 fs-3 ">Suma: {cost.toFixed(2)}</span>
            </ul>
            <div className="text-end mb-5"  onClick={saveData}>
                <button className="btn border-dark p-3 fs-4">
                    <i className="bi bi-bag-check-fill"></i>
                    <span className="ps-2">Zapisz koszyk</span>
                </button>
            </div>
        </div>
    );
}
