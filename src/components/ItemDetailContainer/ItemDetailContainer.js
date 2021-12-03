import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PedirDatos } from "../../helpers/PedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.scss";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";
import { handleTop } from "../../helpers/handleTop.js";

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    let actualCategory;

    const { itemId } = useParams();
    console.log(itemId);

    useEffect(() => {
        window.addEventListener("scroll", handleTop);
        window.scrollTo(0, 0);
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
        return () => {
            window.removeEventListener("scroll", handleTop);
        };
    }, [itemId]);

    return (
        <div className="details-container">
            {loading ? <LoaderComp /> : <ItemDetail {...item} />}
            <div
                className={`backdrop-overlay ${
                    loading ? "visible" : "hidden"
                } detail-container`}
            ></div>
        </div>
    );
};
