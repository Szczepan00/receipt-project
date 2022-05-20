import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {LinkButton} from "./LinkButton";
import {FormAddProduct} from "../NextShopping/FormAddProduct";
import {ShopHistory} from "../History/ShopHistory";


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
                    <Route path="/shopList" element={<FormAddProduct />} />
                    <Route path="/shopListHistory" element={<ShopHistory data={data}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

