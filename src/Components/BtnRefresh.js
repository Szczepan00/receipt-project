import React from 'react';

export function BtnRefresh() {

    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="container d-flex p-3 mt-3">
            <button className="d-flex align-items-center btn btn-dark p-3 fs-4 m-auto" onClick={refresh}>
                <i className="bi bi-arrow-clockwise p-1 fs-2"></i>
                <span>Odśwież historię zakupów</span>
            </button>
        </div>
    );
}

