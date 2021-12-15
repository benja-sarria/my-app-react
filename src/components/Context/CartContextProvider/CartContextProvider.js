import React, { createContext, useContext, useState, useEffect } from "react";
import { getSessionCart } from "../../../helpers/getSessionCart.js";
import { setSessionCart } from "../../../helpers/setSessionCart.js";
import { UserContext } from "../UserContext/UserContext.js";

export const CartContext = createContext();

export const CartContextProvider = ({
    acrossCount,
    setAcrossCount,
    children,
}) => {
    /* contextos para el carrito */
    console.log(acrossCount);
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        // el método some recorre el array de mi carrito y me devuelve true or false si encuentra el elemento que tiene una propiedad id
        return cart.some((prod) => {
            console.log(prod);
            return prod.id === id;
        });
    };

    /* funciones para manipular el carrito */
    const addCart = (item) => {
        console.log(item);
        if (!isInCart(item.id)) {
            // para mandar una nueva instancia sin mutar carrito tengo que pasarle el item de la siguiente manera
            setCart([...cart, item]);
            console.log(cart);
        }
    };

    const removeCartItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const ditchCart = () => {
        setCart([]);
        sessionStorage.removeItem("sessionCart");
    };

    const totalCart = () => {
        return cart.reduce((accumulator, prod) => {
            console.log(accumulator);
            console.log(prod.cartQuantity);
            return accumulator + prod.cartQuantity;
        }, 0);
    };

    const accountTotal = () => {
        setAcrossCount(totalCart());
        console.log(acrossCount);
        return cart.reduce((accumulator, prod) => {
            console.log(accumulator);
            console.log(prod.cartQuantity);
            return accumulator + prod.cartQuantity;
        }, 0);
    };

    console.log(accountTotal());

    const totalCompras = () => {
        return cart.reduce((accumulator, product) => {
            return accumulator + product.price * product.cartQuantity;
        }, 0);
    };

    const { signedUser, loggedIn } = useContext(UserContext);

    useEffect(() => {
        if (cart.length === 0) {
            console.log("recuperando carrito de la sesión");
            getSessionCart(setCart, cart, signedUser, ditchCart, loggedIn);
        }
    }, [loggedIn]);

    useEffect(() => {
        if (signedUser.user.uid) {
            let identifiedCart = { ...cart, userID: `${signedUser.user.uid}` };
            console.log(identifiedCart);
            setSessionCart(identifiedCart, signedUser);
        }
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addCart,
                removeCartItem,
                ditchCart,
                isInCart,
                accountTotal,
                totalCompras,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
