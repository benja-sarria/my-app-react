import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList.js";
import { stock } from "../../data/stock.js";
import "./ItemProcessor.scss";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";
import { handleTop } from "../../helpers/handleTop.js";
// metodos firebase
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";

export const ItemProcessor = ({ catID }) => {
    //    para hacer el "cargando" lo podemos hacer con un hook useState
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState(catID);

    console.log(productos);

    useEffect(() => {
        window.addEventListener("scroll", handleTop);
        window.scrollTo(0, 0);
        setLoading(true);
        setCategoria(catID);

        // 1- ARMAMOS LA REFERENCIA
        const productsRef = collection(database, "products");

        /* referencia Query para filtrar los elementos - el método where recibe la propiedad que quiero comparar, el operador de comparación y por último contra qué quiero compararlo
        
        */
        //    importante el ternario para que filtre los productos
        const q = catID
            ? query(productsRef, where("category", "==", `${catID}`))
            : productsRef;

        getDocs(q)
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
                setProductos(items);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            window.removeEventListener("scroll", handleTop);
        };
    }, [stock, catID]);

    // para capturar los datos que se resolvieron en la promesa usamos el then - Aquí le indicamos que espere la resolución y que capture el valor de resolución:

    return (
        <>
            {loading ? (
                <LoaderComp message={"Sorpréndete..."} />
            ) : (
                <ItemList productos={productos} categoria={categoria} />
            )}
            <div
                className={`backdrop-overlay ${
                    loading ? "visible" : "hidden"
                } list-container`}
            ></div>
        </>
    );
};

/* cuando queremos listar algo en REACT  tenemos que utilizar el método MAP -  Es un método que recorre un array y permite crear un array nuevo donde cada elemento de ese nuevo array depende del return del método. */
