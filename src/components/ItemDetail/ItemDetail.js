import React from "react";
import { useNavigate } from "react-router";
import { ItemCountEnabler } from "../ItemCountEnabler/ItemCountEnabler.js";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ItemDetail.scss";

export const ItemDetail = ({ id, name, desc, price, img, category }) => {
    // para volver atrás con hooks de react
    const navigate = useNavigate();

    const handleVolver = () => {
        /* acá puedo poner la ruta que quiera navegar */

        /* el hook navigate puede recibir valores enteros, positivos o negativos, si pongo -1 vuelve a la página anterior a la que estaba */
        navigate(-1);
    };

    return (
        <article className="card">
            <IconButton
                aria-label="back"
                color="primary"
                onClick={handleVolver}
                className="back-btn"
            >
                <ArrowBackIcon />
                <span className="back-text"> Atrás</span>
            </IconButton>
            <img src={img} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title detail-page-title">{name}</h5>
                <p className="card-text detail-page-text">{desc}</p>
                <p className="card-text detail-page-text">$ &nbsp; {price}</p>
                <p className="card-text detail-page-text">{category}</p>
                <hr className="divisor" />
                <ItemCountEnabler stock="5" initial="0" />
            </div>
        </article>
    );
};
