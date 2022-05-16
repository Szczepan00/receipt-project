import React from 'react';

export function InputForm({title, name, type}) {
    return (
        <div className="fs-3 text-center d-flex flex-column justify-content-center align-items-center">
            <label className="fs-2 p-lg-3  " htmlFor={name}>{title}:</label>
            <input className="w-75 text-center" id={name} type={type}/>
        </div>
    );
}

