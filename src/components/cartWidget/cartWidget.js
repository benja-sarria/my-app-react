import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import "./CartWidget.scss";

export const CartWidget = ({
    icon,
    showBadge,
    addedProducts,
    specialClass,
    show,
}) => {
    let counterNumber;
    console.log(addedProducts);
    const [invisible, setInvisible] = useState(true);
    const [productQuantity, setProductQuantity] = useState(0);
    console.log(productQuantity);
    const handleBadgeVisibility = () => {
        if (productQuantity > 0) {
            setInvisible(false);
        } else {
            setInvisible(true);
        }
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: 0,
            top: 2,

            padding: "0 4px",
            zIndex: -2,
            opacity: Number(showBadge),
        },
    }));

    const addQuantity = () => {
        setProductQuantity(+2);
        console.log(productQuantity);
    };

    useEffect(() => {
        counterNumber = document.querySelector(".counter-number");
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
                className={`counter-number ${
                    specialClass && specialClass
                } ${show}`}
            >
                {addedProducts}
            </div>
        </div>
    );
};

{
    /* <>
    <StyledBadge
        badgeContent={productQuantity === "undefined" ? 1 : productQuantity}
        color="secondary"
        className="badge-icon"
        invisible={false}
        aria-label="product-quantity"
    >
        {icon}
    </StyledBadge>
</>;
 */
}
