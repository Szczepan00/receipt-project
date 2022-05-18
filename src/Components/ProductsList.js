import React from 'react';
import db from '../firebase'
import {doc, setDoc} from "firebase/firestore/lite";

export function ProductsList({item, cost, basket}) {

    const date = new Date();

    const saveData = async () => {
        await setDoc(doc(db, "bills", "produkt1"), {basket, date});
    }

    return (
        <div className="mt-4">
            <h2 className="pb-2">Twoje zakupy:</h2>
            <ul className="list-group">
                {item}
                <span className="text-end p-3 fs-3 fw-bold">Suma: {cost.toFixed(2)}</span>
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
