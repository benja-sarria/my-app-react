import React from "react";

export const getSessionCart = (setCart, cart) => {
    if (sessionStorage.getItem("sessionCart")) {
        let storagedCart = sessionStorage.getItem("sessionCart");
        let parseedCart = JSON.parse(storagedCart);
        setCart(...cart, parseedCart);
        console.log(cart);
    }
};
