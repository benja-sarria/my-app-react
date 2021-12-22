import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PedirDatos } from "../../helpers/PedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.scss";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";
import { handleTop } from "../../helpers/handleTop.js";
import { doc, getDoc, collection } from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";

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

        // acá me traigo toda la colección
        const productsRef = collection(database, "products");
        // acá me traigo solamente el documento que quiero traer
        const docRef = doc(database, "products", itemId);
        getDoc(docRef)
            .then((document) => {
                setItem({
                    id: document.id,
                    ...document.data(),
                });
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
            {loading ? (
                <LoaderComp message={"Sorpréndete..."} />
            ) : (
                <ItemDetail {...item} />
            )}
            <div
                className={`backdrop-overlay ${
                    loading ? "visible" : "hidden"
                } detail-container`}
            ></div>
        </div>
    );
};
