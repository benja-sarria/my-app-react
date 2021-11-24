import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PedirDatos } from "../../helpers/PedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    let actualCategory;

    const { itemId } = useParams();
    console.log(itemId);

    useEffect(() => {
        setLoading(true);
        PedirDatos()
            .then((resp) => {
                console.log(resp);
                for (let category in resp) {
                    console.log(resp[category]);
                    actualCategory = resp[category].find((element) => {
                        console.log(element["id"]);
                        console.log(element["id"] === Number(itemId));
                        return element["id"] === Number(itemId);
                    });
                    if (actualCategory) {
                        console.log(actualCategory);
                        break;
                    }
                }
                setItem(actualCategory);
                console.log(item);
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
