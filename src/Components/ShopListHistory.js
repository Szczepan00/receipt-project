import React from 'react';
import {ShowHistoryBasket} from "./ShowHistoryBasket";

export function ShopListHistory({data}) {


    return (
        <main className="container p-2">
            <h2 className=" mb-3">Historia zakupów: </h2>
            <ShowHistoryBasket dane={data}/>
        </main>
    );
}