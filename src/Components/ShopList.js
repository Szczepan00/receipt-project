import React from 'react';
import {InputForm} from "./InputForm";

export function ShopList(props) {
    return (
        <main>
            <div className="container">
                <form className="border bg-light d-flex flex-column ">
                    <InputForm title="Nazwa produktu" name="name" type="text"  />
                    <InputForm title="Cena" name="price" type="number"  />
                    <InputForm title="Ilość" name="quantity" type="number"  />

                    <button className="btn btn-dark m-3 mt-3 fs-4 d-flex align-items-center align-self-center">
                        <i className="bi bi-plus-circle m-2 fs-2"></i>
                        Dodaj produkt
                    </button>
                </form>
            </div>
        </main>
    );
}

