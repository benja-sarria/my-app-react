import React, { useState, useEffect } from "react";
import { ItemCount } from "../ItemCount/ItemCount.js";

export const ItemCountEnabler = ({ stock, initial }) => {
    const [disponibility, setDisponibility] = useState(Number(stock));
    let currentClassState = "disabled";

    useEffect(() => {
        setDisponibility(Number(stock));
        if (disponibility > 0) {
            currentClassState = "able";
        } else {
            currentClassState = "disabled";
        }
    }, [stock]);

    if (disponibility > 0) {
        currentClassState = "able";
    } else {
        currentClassState = "disabled";
    }

    return (
        <ItemCount
            stock={disponibility}
            currentClassState={currentClassState}
            initial={initial}
        />
    );
};
