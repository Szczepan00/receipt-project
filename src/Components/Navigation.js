import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {LinkButton} from "./LinkButton";
import {ShopList} from "./ShopList";
import {ShopListHistory} from "./ShopListHistory";


export function Navigation({data}) {
    return (
        <div className="container flex-column  col-12 col-lg-5">
            <BrowserRouter>
                <Link to="/shopList">
                    <LinkButton
                        title="Kolejne zakupy"
                        icon={<i className="bi bi-basket-fill"></i>}
                    />
                </Link>
                <Link to="/shopListHistory">
                    <LinkButton
                        title="Historia zakupów"
                        icon={<i className="bi bi-list-ul"></i>}
                    />
                </Link>
                <Routes>
                    <Route path="/shopList" element={<ShopList />} />
                    <Route path="/shopListHistory" element={<ShopListHistory data={data}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

