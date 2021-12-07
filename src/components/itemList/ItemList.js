import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item.js";
import "./ItemList.scss";

export const ItemList = ({ productos, categoria }) => {
    const [loading, setLoading] = useState(true);
    const allProducts = [];
    let products = productos;
    let category = categoria;
    /* if (!category) {
        for (let cat in products) {
            console.log(products[cat]);
            allProducts.push(...products[cat]);
            console.log(allProducts);
        }
    } */

    useEffect(() => {
        productos ? setLoading(false) : setLoading(true);
        console.log(products[category]);
    }, [productos]);

    console.log(products);
    return (
        <div className="item-list container">
            {loading ? (
                <h2 className="loading-sign">
                    Estamos buscando los productos para vos...
                </h2>
            ) : (
                productos.map((prod) => (
                    <Item key={prod.id} {...prod} />
                    // puedo mandar por propiedades cada producto o ...
                    // <Item prod={prod} />
                    // puedo mandar un spread de las propiedades del producto
                ))
            )}
        </div>
    );
};
