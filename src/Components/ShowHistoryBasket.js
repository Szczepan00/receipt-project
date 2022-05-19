import React from 'react';
import {BtnRefresh} from "./BtnRefresh";

export function ShowHistoryBasket({dane}) {
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm';
    const charsNumber = 10;

    const idGenerator = () => {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        return code;
    }

    const show = dane.map((item) =>
        <details key={idGenerator()}>

            <summary className="border p-3 fs-2 fst-italic fw-bold d-flex justify-content-between" key={idGenerator()}>
                <span key={idGenerator()}>
                    {item.day}
                </span>
                <span key={idGenerator()}>
                    {item.hours}:{item.minutes <10 ? `0${item.minutes}` : item.minutes }
                </span>
            </summary>

            <ul className="list-group mb-5" key={idGenerator()}>
                {item.basket.map((item) =>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3 " key={idGenerator()}>
                        <span className="ms-3 fs-4 fw-bolder">{item.name}</span>
                        <span className="fw-bold fs-4">{item.sum}</span>
                    </li>
                )}
                <li className=" list-group-item text-end p-3 fs-3 fw-bold">
                    Suma: {item.cost.toFixed(2)}
                </li>
            </ul>

        </details>)

    return (
        <>
            {dane.length ? show: <h2>Brak historii zakupów</h2>}
            <BtnRefresh />
        </>
    );
}
