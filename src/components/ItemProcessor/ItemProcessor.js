import React, { useEffect, useState } from "react";
import { PedirDatos } from "../../helpers/PedirDatos.js";
import { ItemList } from "../ItemList/ItemList.js";
import { stock } from "../../data/stock.js";
import "./ItemProcessor.scss";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";
import { handleTop } from "../../helpers/handleTop.js";

export const ItemProcessor = ({ catID, setSelectorsLoaded }) => {
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
        PedirDatos()
            // el parámetro del then captura el valor del resolve de la promesa (puede tener el nombre que quiera pero se usa response por convención)
            .then((response) => {
                /* la mejor forma para que queden cargados los productos en mi componente es cargarlos en algún estado - de lo contrario la respuesta muere en este scope, sin poder mandarla en el return del componente*/
                setProductos(response);
                console.log(response);
            })
            // el parámetro del then captura el valor del reject de la promesa (puede tener el nombre que quiera pero se usa response por convención)
            .catch((error) => {
                console.log(error);
            })
            // se ejecuta siempre después del .then o el .catch
            .finally(() => {
                setLoading(false);
                setSelectorsLoaded(true);
            });
        return () => {
            window.removeEventListener("scroll", handleTop);
        };
    }, [stock, catID]);

    // para capturar los datos que se resolvieron en la promesa usamos el then - Aquí le indicamos que espere la resolución y que capture el valor de resolución:

    return (
        <>
            {loading ? (
                <LoaderComp />
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
