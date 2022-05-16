import React from 'react';

export function Product({name, price}) {
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3 ">
                <button className="bg-transparent border-0">
                    <i className="bi bi-trash-fill fs-2"></i>
                </button>
                <span className="h5 flex-grow-1 ms-3">{name}</span>
                <span className="fw-bold">{price.toFixed(2)}</span>
            </li>
        </div>
    );
}
