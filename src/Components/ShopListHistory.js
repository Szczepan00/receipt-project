import React from 'react';




export function ShopListHistory({data}) {
    return (
        <main className="container p-2">
            <h2 className=" mb-3">Historia zakupów:</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div>
                        <span></span>
                        <span>godzina</span>
                        <button>Pokaż</button>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">Product --- cena</li>
                        <li className="list-group-item">Product --- cena</li>
                        <li className="list-group-item">Product --- cena</li>
                    </ul>
                </li>


            </ul>
        </main>
    );
}
