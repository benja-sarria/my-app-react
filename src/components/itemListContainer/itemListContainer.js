import React from "react";
import { Container } from "react-bootstrap";
import "./itemListContainer.scss";
import { ItemCountEnabler } from "../ItemCountEnabler/ItemCountEnabler.js";

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h2 className="section-title">{greeting}</h2>
            <ItemCountEnabler stock="5" initial="0" />
        </Container>
    );
};
