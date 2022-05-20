import React from 'react';
import {ShowHistoryShopping} from "./ShowHistoryShopping";

export function ShopHistory({data}) {


    return (
        <main className="container p-2">
            <h2 className=" mb-3">Historia zakupów: </h2>
            <ShowHistoryShopping dane={data}/>
        </main>
    );
}