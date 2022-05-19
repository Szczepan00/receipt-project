import React from 'react';

export function LinkButton({title, icon}) {
    return (
        <div className="link-dark fs-1 p-2">
            <div className="d-flex flex-column flex-lg-row justify-content-center align-content-center border border-3 rounded text-center p-2 ">
                <i className="align-self-center  fs-1 ">{icon}</i>
                <span className="text-decoration-none p-lg-3">{title}</span>
            </div>
        </div>
    );
}

