import React from 'react';

export function ProductList({item, cost}) {
    return (
        <div className="mt-4">
            <h2 className="p-3">Twoje zakupy:</h2>
            <ul className="list-group">
                {item}
                <span className="text-end p-3 fs-3 fw-bold">Suma: {cost.toFixed(2)}</span>
            </ul>
            <div className="text-end mb-5">
                <button className="btn border-dark p-3 fs-4">
                    <i className="bi bi-bag-check-fill"></i>
                    <span className="ps-2">Zapisz koszyk</span>
                </button>
            </div>
        </div>
    );
}
