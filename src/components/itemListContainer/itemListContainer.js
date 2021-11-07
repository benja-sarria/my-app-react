import React from "react";
import { Container } from "react-bootstrap";
import "./itemListContainer.scss";

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h2 className="section-title">{greeting}</h2>
        </Container>
    );
};
