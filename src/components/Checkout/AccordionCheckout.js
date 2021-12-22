import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordionCheckout.scss";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";

export function AccordionCheckout({ list }) {
    const { totalCompras } = useContext(CartContext);
    const parsedList = JSON.parse(list);
    let checkoutArray = [];
    for (const key in parsedList) {
        if (Object.hasOwnProperty.call(parsedList, key)) {
            let element = parsedList[key];
            checkoutArray.push(element);
        }
    }
    console.log(checkoutArray);
    return (
        <div className="accordion-container">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Resumen de la Compra</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {checkoutArray.map((prod) => (
                        <ul className="checkout-description-list">
                            {checkoutArray.indexOf(prod) + 1}° - Producto:{" "}
                            {prod.name}
                            <li className="checkout-description-text">
                                Cantidad: {prod.quantity} unidades
                            </li>
                            <li className="checkout-description-text">
                                Total: ${" "}
                                {Intl.NumberFormat().format(prod.total)}
                            </li>
                        </ul>
                    ))}
                    <br className="divisor" />
                </AccordionDetails>
                <div className="checkout-total-container">
                    <h5 className="checkout-total-description">
                        Total Compra: ${" "}
                        {Intl.NumberFormat().format(totalCompras())}
                    </h5>
                </div>
            </Accordion>
        </div>
    );
}
