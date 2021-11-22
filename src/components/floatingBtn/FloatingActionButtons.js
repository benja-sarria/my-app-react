import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { CartWidget } from "../cartWidget/cartWidget.js";
import "./FloatingActionButtons.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function FloatingActionButtons() {
    return (
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="secondary" aria-label="add">
                <CartWidget icon={<ShoppingCartIcon />} showBadge="1" />
            </Fab>
        </Box>
    );
}
