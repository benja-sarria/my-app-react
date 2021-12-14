import React from "react";

export const setSessionCart = (cart) => {
    let sessionCartAdd = JSON.stringify(cart);
    console.log(sessionCartAdd);
    sessionStorage.setItem("sessionCart", sessionCartAdd);
};
