import React from "react";
import { Container } from "react-bootstrap";
import "./itemListContainer.scss";
import { ItemCountEnabler } from "../ItemCountEnabler/ItemCountEnabler.js";
import { ItemOne } from "../promise/Promise.js";

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container-fluid">
            <h2 className="section-title">{greeting}</h2>
            <ItemCountEnabler stock="5" initial="0" />

            <ItemOne />
        </div>
    );
};
