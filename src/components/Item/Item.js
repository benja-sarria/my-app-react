import React from "react";
import "./Item.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// si recibo el objeto lo recibo export const Item = ({ prod })  // sino lo recibo así

export const Item = ({ id, name, desc, price, img }) => {
    return (
        <article className="card">
            <img src={img} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title main-page-title">{name}</h5>
                <hr className="divisor" />
                <p className="card-text main-page-text">{desc}</p>
                <p className="card-text main-page-text">{`$ ${Intl.NumberFormat().format(
                    price
                )}`}</p>
                <br />
                <Link to={`/detail/${id}`} className="link-text">
                    <Button variant="outlined" className="view-more">
                        Ver más
                    </Button>
                </Link>
            </div>
        </article>
    );
};
