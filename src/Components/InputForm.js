import React from 'react';

export function InputForm({title, name, type, value, change, minValue, minLength, deafultText}) {
    return (
        <div className="fs-3 text-center d-flex flex-column justify-content-center align-items-center">
            <label
                className="fs-2 p-lg-3"
                htmlFor={name}
            >
                {title}:
            </label>
            <input
                className="form-control p-lg-2 w-75 text-center"
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={change}
                min={minValue}
                minLength={minLength}
                placeholder={deafultText}
            />
        </div>
    );
}

