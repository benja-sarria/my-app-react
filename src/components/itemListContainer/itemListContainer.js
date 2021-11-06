import React from "react";
import NavBar from "../NavBar/navBar.js";
import { Container } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <NavBar />
            <h2>{greeting}</h2>
        </Container>
    );
};
