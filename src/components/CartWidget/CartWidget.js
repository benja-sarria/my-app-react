import React, { useEffect, useState, useRef } from "react";
import "./CartWidget.scss";

export const CartWidget = ({ icon, addedProducts, specialClass, show }) => {
    console.log(addedProducts);

    const [productQuantity, setProductQuantity] = useState(0);
    console.log(productQuantity);

    const CounterNumber = useRef(null);

    useEffect(() => {
        console.log("actualizando cantidad del carrito");
        console.log(
            `la cantidad del estado es de: ${productQuantity}, y lo que recibo por props es de ${0}`
        );
        setProductQuantity(addedProducts);
        // if a product was added

        console.log(productQuantity);
    }, [addedProducts]);

    return (
        <div className="cart-widget-container">
            {icon}
            <div
                ref={CounterNumber}
                className={`counter-number ${
                    specialClass && specialClass
                } ${show}`}
            >
                {addedProducts}
            </div>
        </div>
    );
};
