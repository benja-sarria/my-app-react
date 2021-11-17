import React, { useEffect, useState } from "react";
import { PedirDatos } from "../../helpers/PedirDatos.js";
import { ItemList } from "../itemList/ItemList.js";
import { stock } from "../../data/stock.js";

export const ItemOne = () => {
    //    para hacer el "cargando" lo podemos hacer con un hook useState
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    console.log(productos);

    useEffect(() => {
        setLoading(true);

        PedirDatos()
            // el parámetro del then captura el valor del resolve de la promesa (puede tener el nombre que quiera pero se usa response por convención)
            .then((response) => {
                /* la mejor forma para que queden cargados los productos en mi componente es cargarlos en algún estado - de lo contrario la respuesta muere en este scope, sin poder mandarla en el return del componente*/
                setProductos(response);
            })
            // el parámetro del then captura el valor del reject de la promesa (puede tener el nombre que quiera pero se usa response por convención)
            .catch((error) => {
                console.log(error);
            })
            // se ejecuta siempre después del .then o el .catch
            .finally(() => {
                setLoading(false);
            });
    }, [stock]);

    // para capturar los datos que se resolvieron en la promesa usamos el then - Aquí le indicamos que espere la resolución y que capture el valor de resolución:

    return (
        <>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <ItemList productos={productos} />
            )}
        </>
    );
};

/* cuando queremos listar algo en REACT  tenemos que utilizar el método MAP -  Es un método que recorre un array y permite crear un array nuevo donde cada elemento de ese nuevo array depende del return del método. */
