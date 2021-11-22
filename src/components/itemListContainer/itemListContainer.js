import React from "react";
import "./itemListContainer.scss";
import { ItemCountEnabler } from "../ItemCountEnabler/ItemCountEnabler.js";
import { ItemOne } from "../promise/Promise.js";

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container-fluid">
            <h2 className="section-title">{greeting}</h2>

            <ItemOne />
        </div>
    );
};
