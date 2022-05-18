import React, {useState} from 'react';
import {InputForm} from "./InputForm";
import {Product} from "./Product";
import {ProductsList} from "./ProductsList";

export function ShopList() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 1,
        sum: 0,
    });
    const [allProducts, setAllProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [message, setMessage] = useState({
        text: "Musisz wypełnić poprawnie wszystkie pola!",
        isActive: false,
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === 'price' || name === 'quantity'){
            setProduct(prevState => {
                return {
                    ...prevState,
                    [name]: value,
                    sum: value * (name === 'price' ? prevState.quantity : prevState.price) //toFixed(2),
                }
            });
        }else {
            setProduct(prevState => {
                return {
                    ...prevState,
                    [name]: value,
                }
            });
        }
        setMessage(prevState => {
            return {
                ...prevState,
                isActive: false,
            }
        });

    };

    const addProduct = (e) => {
        const {name, price, quantity} = product;
        e.preventDefault();
        if(name === '' || price <= 0 || quantity<1){
            setMessage(prevState => {
                return {
                    ...prevState,
                    isActive: true,
                }
            });
        }else {
            setMessage(prevState => {
                return {
                    ...prevState,
                    isActive: false,
                }
            });
            setTotalCost(prevState => prevState + product.sum);
            setAllProducts(prevState => {
                return [
                    ...prevState,
                    product,
                ]
            });
            setProduct(prevState => {
                return {
                    name: '',
                    price: 0,
                    quantity: 1,
                    sum: 0,
                }
            })
        }
        console.log(Boolean(allProducts))
    };

    const removeProduct = (index) => {
        const arr = allProducts.filter(item => item !== allProducts[index]);
        setTotalCost(prevState => prevState - allProducts[index].sum);
        setAllProducts(arr);



    }
    const showProduct = allProducts.map((item, index) => <Product key={index} name={item.name} price={item.sum} i={index} remove={removeProduct} />)

    return (
        <main>
            <div className="p-2">
                <form className="border border-3 rounded bg-light d-flex flex-column " onSubmit={addProduct}>
                    <InputForm
                        title="Nazwa produktu"
                        name="name"
                        type="text"
                        value={product.name}
                        change={handleChange}
                        deafultText="Wpisz nazwę produktu..."
                    />
                    <InputForm
                        title="Cena"
                        name="price"
                        type="number"
                        value={product.price ? product.price : ''}
                        change={handleChange}
                        // minValue={0}
                        deafultText="Wpisz cenę produktu..."
                    />
                    <InputForm
                        title="Ilość"
                        name="quantity"
                        type="number"
                        value={product.quantity}
                        change={handleChange}
                        minValue={1}
                        deafultText="Wpisz ilość sztuk..."
                    />
                    <p className="text-center pt-3 fs-2 text-danger text-decoration-underline">{message.isActive ? message.text : ''}</p>
                    <button className="btn btn-dark m-3 mt-3 fs-4 d-flex align-items-center align-self-center">
                        <i className="bi bi-plus-circle m-2 fs-2"></i>
                        Dodaj produkt
                    </button>
                </form>

                {allProducts.length ? <ProductsList item={showProduct} cost={totalCost} basket={allProducts}/> : null }


            </div>
        </main>
    );
}

