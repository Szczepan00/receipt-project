import React from 'react';

export function ShowHistoryBasket({dane}) {

    const show = dane.map((item, index) =>
        <details key={index}>

            <summary className="border p-3 fs-2 fst-italic fw-bold d-flex justify-content-between" key={index}>
                <span key={index}>
                    {item.day}
                </span>
                <span key={index}>
                    {item.hours}:{item.minutes <10 ? `0${item.minutes}` : item.minutes }
                </span>
            </summary>

            <ul className="list-group mb-5" key={index}>
                {item.basket.map((item, i) =>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3 " key={i}>
                        <span className="flex-grow-1 ms-3 fs-4">{item.name}</span>
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
        </>
    );
}
