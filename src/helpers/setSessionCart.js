import React from "react";

export const setSessionCart = (cart, signedUser) => {
    cart.userID = `${signedUser.user.uid}`;
    let sessionCartAdd = JSON.stringify(cart);
    console.log(sessionCartAdd);
    sessionStorage.setItem("sessionCart", sessionCartAdd);
};
