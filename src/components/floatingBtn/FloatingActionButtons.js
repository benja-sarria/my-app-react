import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { CartWidget } from "../CartWidget/CartWidget.js";
import "./FloatingActionButtons.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { findAllByDisplayValue } from "@testing-library/react";
import { Link } from "react-router-dom";

export default function FloatingActionButtons({ addedProducts }) {
    const floatingBtn = useRef(null);

    const rotateAnimation = () => {
        let rotateCount = 360;
        console.log("haciendo girar el botón");
        console.log(floatingBtn.current.style.transition);
        floatingBtn.current.style.transition =
            "opacity 2000ms ease , transform 500ms ease-in-out, background-color 500ms ease-in-out";
        floatingBtn.current.style.transform = `rotate(${rotateCount}deg) scale(1.2)`;
        floatingBtn.current.style.backgroundColor =
            "var(--globalContrastHighlight-background-color-three)";
        setTimeout(() => {
            floatingBtn.current.style.transition =
                "opacity 2000ms ease , transform 200ms ease-in-out, background-color 300ms ease-in-out";
            floatingBtn.current.style.transform = `scale(1)`;
            floatingBtn.current.style.backgroundColor =
                "var(--globalGreenGradient1-background-color)";
        }, 500);
        setTimeout(() => {
            floatingBtn.current.style.transition =
                "opacity 2000ms ease , transform 10ms ease";
            floatingBtn.current.style.removeProperty("transform");
            floatingBtn.current.style.removeProperty("background-color");
        }, 900);
    };

    useEffect(() => {
        rotateAnimation();
        return () => {};
    }, [addedProducts]);

    return (
        <Link
            to="/cart"
            className={`${addedProducts > 0 ? "showFloating" : "hideFloating"}`}
        >
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab
                    color="secondary"
                    aria-label="add"
                    className={`${
                        addedProducts > 0 ? "showFloating" : "hideFloating"
                    }`}
                    ref={floatingBtn}
                >
                    <CartWidget
                        icon={<ShoppingCartIcon />}
                        addedProducts={addedProducts}
                        specialClass="specialClass floating"
                        show={addedProducts > 0 ? "visible" : "invisible"}
                    />
                </Fab>
            </Box>
        </Link>
    );
}
