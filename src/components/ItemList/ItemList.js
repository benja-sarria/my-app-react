import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item.js";
import "./ItemList.scss";

export const ItemList = ({ productos, categoria }) => {
    const [loading, setLoading] = useState(true);
    let products = productos;
    let category = categoria;

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
                productos.map((prod) => <Item key={prod.id} {...prod} />)
            )}
        </div>
    );
};
