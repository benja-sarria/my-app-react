import React, { useState, useEffect } from "react";
import { ItemCount } from "../ItemCount/ItemCount.js";

export const ItemCountEnabler = ({ stock, initial }) => {
    const [availability, setAvailability] = useState(Number(stock));
    let currentClassState = "disabled";

    useEffect(() => {
        setAvailability(Number(stock));
        if (availability > 0) {
            currentClassState = "able";
        } else {
            currentClassState = "disabled";
        }
    }, [stock]);

    if (availability > 0) {
        currentClassState = "able";
    } else {
        currentClassState = "disabled";
    }

    return (
        <ItemCount
            stock={availability}
            currentClassState={currentClassState}
            initial={initial}
        />
    );
};
