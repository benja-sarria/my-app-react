import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { CartWidget } from "../CartWidget/CartWidget.js";
import "./FloatingActionButtons.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { findAllByDisplayValue } from "@testing-library/react";

export default function FloatingActionButtons({ addedProducts }) {
    useEffect(() => {
        return () => {};
    }, [addedProducts]);

    return (
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="secondary" aria-label="add">
                <CartWidget
                    icon={<ShoppingCartIcon />}
                    addedProducts={addedProducts}
                    specialClass="specialClass floating"
                    show={addedProducts > 0 ? "visible" : "invisible"}
                />
            </Fab>
        </Box>
    );
}
