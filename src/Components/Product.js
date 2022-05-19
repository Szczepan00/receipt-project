import React from 'react';

export function Product({name, price, remove, i}) {
    return (
        <div>
            <li className="d-flex justify-content-between align-items-center list-group-item p-3 ">
                <button className="bg-transparent border-0" onClick={() => remove(i)}>
                    <i className="bi bi-trash-fill fs-2"></i>
                </button>
                <span className="flex-grow-1 ms-3 fs-4">{name}</span>
                <span className="fw-bold fs-4">{price.toFixed(2)}</span>
            </li>
        </div>
    );
}
