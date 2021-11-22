import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PedirDatos } from "../../helpers/PedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);

    const { itemId } = useParams();
    console.log(useParams());

    useEffect(() => {
        setLoading(true);

        PedirDatos()
            .then((resp) => {
                setItem(resp.find((prod) => prod.id === Number(itemId)));
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className="details-container">
            {loading ? (
                <h2 className="loading-sign">Cargando detalle...</h2>
            ) : (
                <ItemDetail {...item} />
            )}
        </div>
    );
};
