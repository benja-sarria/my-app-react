import React, { useEffect, useState } from "react";
// metodos firebase
import {
    collection,
    addDoc,
    doc,
    writeBatch,
    documentId,
    updateDoc,
    getDocs,
    query,
    where,
    orderBy,
    Timestamp,
} from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";
import { StockCard } from "../StockCard/StockCard.js";
import "./StockModify.scss";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

export const StockModify = () => {
    const [loading, setLoading] = useState(false);
    const [databaseItems, setDatabaseItems] = useState([]);

    const navigate = useNavigate();
    const handleVolver = () => {
        navigate(-1);
    };

    const determineActualStock = (actualStock) => {
        return actualStock;
    };

    const handleModify = async (id, newStock) => {
        const batch = writeBatch(database);
        const productsRef = collection(database, "products");
        const products = await getDocs(productsRef);

        const filteredProd = products.docs.filter((doc) => {
            return doc.id === id;
        });
        console.log(filteredProd[0]);

        console.log(filteredProd[0].data());
        batch.update(filteredProd[0].ref, {
            stock: newStock,
        });
        batch.commit();
    };

    useEffect(() => {
        // 1- ARMAMOS LA REFERENCIA
        const productsRef = collection(database, "products");

        getDocs(productsRef)
            .then((collection) => {
                // tengo que mapearlo en un array de objetos que si pueda consumir en mi app
                const items = collection.docs.map((doc) => {
                    /* el método .data() me retorna el elemento de cada objeto de firebase */
                    return {
                        // para obtener el id del documento
                        id: doc.id,
                        // y el resto del objeto va a ser un spread del doc.data() con los otras propiedades
                        ...doc.data(),
                    };
                });
                // imprimo el array de objetos de mis productos sin los ID porque en firebase el id está por fuera del "documento"
                console.log(items);
                setDatabaseItems(items);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <IconButton
                aria-label="back"
                color="primary"
                onClick={handleVolver}
                className="back-btn special-back-btn modify-stock-btn"
            >
                <ArrowBackIcon />
                <span className="back-text"> Atrás</span>
            </IconButton>
            <section className="modify-stock-section">
                {databaseItems.map((prod) => (
                    <StockCard
                        key={prod.id}
                        {...prod}
                        handleModify={handleModify}
                        determineActualStock={determineActualStock}
                    />
                ))}
            </section>
        </>
    );
};
