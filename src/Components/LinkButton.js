import React from 'react';

export function LinkButton({title, icon}) {
    return (
        <div className="fs-1 link-dark p-2">
            <div className="border border-3 rounded bg-opacity-25 text-center p-2 d-flex flex-column flex-lg-row justify-content-center align-content-center">
                <i className="p-lg-3  fs-1 ">{icon}</i>
                <span className="text-decoration-none p-lg-3">{title}</span>
            </div>
        </div>
    );
}

