import React from "react";

export const getSessionCart = (
    setCart,
    cart,
    signedUser,
    ditchCart,
    loggedIn
) => {
    if (sessionStorage.getItem("sessionCart")) {
        let storagedCart = sessionStorage.getItem("sessionCart");
        let parsedCart = JSON.parse(storagedCart);
        if (loggedIn) {
            setTimeout(() => {
                console.log(signedUser.user.uid);
                console.log(parsedCart.userID);
                console.log(signedUser.user.uid === parsedCart.userID);
                console.log(loggedIn);
                if (
                    signedUser.user.uid &&
                    signedUser.user.uid === parsedCart.userID
                ) {
                    let filteredCart = [];

                    for (const key in parsedCart) {
                        if (Object.hasOwnProperty.call(parsedCart, key)) {
                            if (!isNaN(Number(key))) {
                                console.log(parsedCart[key]);
                                filteredCart.push({ ...parsedCart[key] });
                            }
                        }
                    }
                    console.log(filteredCart);
                    setCart(...cart, filteredCart);
                    console.log(cart);
                } else {
                    ditchCart();
                }
            }, 5000);
        }
    }
};
