import React from "react";
import { Item } from "../item/Item.js";
import "./ItemList.scss";

export const ItemList = ({ productos }) => {
    return (
        <div className="item-list container">
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
                // puedo mandar por propiedades cada producto o ...
                // <Item prod={prod} />
                // puedo mandar un spread de las propiedades del producto
            ))}
        </div>
    );
};
