import React from 'react';

export function Header(props) {
    return (
        <header className='text-center bg-dark text-white'>
            <div className="container p-4 p-xl-5">
                <h1 className="fs-1 text-uppercase">Twój wirtualny paragon</h1>
            </div>
        </header>

    );
}

export default Header;