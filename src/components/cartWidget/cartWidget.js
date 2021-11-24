import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

export const CartWidget = ({ icon, showBadge }) => {
    let counterNumber;
    console.log(counterNumber);
    console.dir(counterNumber);
    const [invisible, setInvisible] = React.useState(true);
    const [productQuantity, setProductQuantity] = useState(2);
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

        // if a product was added

        console.log();
    }, []);

    return (
        <>
            <StyledBadge
                badgeContent={productQuantity}
                color="secondary"
                className="badge-icon"
                invisible={productQuantity > 0 ? false : true}
                aria-label="product-quantity"
            >
                {icon}
            </StyledBadge>
        </>
    );
};
