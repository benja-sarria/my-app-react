import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";
import { validarDatos } from "./validarDatos.js";
import { Navigate } from "react-router-dom";
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
} from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";
import { Timestamp } from "react";

export const Checkout = () => {
    const { cart, totalCompras, ditchCart } = useContext(CartContext);

    const handleEnviar = () => {
        console.log(order);
    };

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        emailConfirm: "",
    });

    const order = {
        buyer: { ...values },
        items: cart,
        total: totalCompras(),
    };

    // para capturar los valores de los input solemos trabajar con estados en react - Guardo los values de un input en un estado

    const handleInputChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(values);

        if (validarDatos(values)) {
            return;
        }
        const order = {
            buyer: { ...values },
            items: cart,
            total: totalCompras(),
            // date: Timestamp.fromDate(new Date()),
        };

        const batch = writeBatch(database);

        const orderRef = collection(database, "order");
        const productsRef = collection(database, "products");

        const q = query(
            productsRef,
            where(
                documentId(),
                "in",
                cart.map((el) => el.id)
            )
        );
        const outOfStock = [];

        const products = await getDocs(q);

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => {
                console.log(prod.id);
                console.log(doc.id);
                return prod.id == doc.id;
            });
            console.log(doc.data().stock);
            console.log(itemToUpdate.cartQuantity);
            if (doc.data().stock >= itemToUpdate.cartQuantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cartQuantity,
                });
            } else {
                console.log(`Estamos sin stock ${outOfStock}`);
                outOfStock.push(itemToUpdate);
            }
        });
        if (outOfStock.length === 0) {
            addDoc(orderRef, order).then((response) => {
                console.log(response.id);
            });
            console.log("modificando base de datos");
            batch.commit();
            ditchCart();
        } else {
            // renderizar que productos no hay
        }

        console.log(q);

        // carrito.forEach((prod) => {
        //     const docRef = doc(productosRef, prod.id);

        //     getDocs(docRef).then((doc) => {
        //         if (doc.data().stock >= prod.cantidad) {
        /* updateDoc(doc.ref, {
                        stock: doc.data().stock - prod.cantidad,
                    }); */
        //         }
        //     });
        // });
    };

    console.log(values.name);

    return cart.length === 0 ? (
        <Navigate to="/" />
    ) : (
        <section>
            <h2>Resumen de Compra</h2>
            <hr />
            <form action="container m-5" onSubmit={handleSubmit}>
                {/* al poner el name para usar el handleinputchange tengo que usar el nombre de cada propiedad del objeto, para que la tome en el evt.target.name */}
                <input
                    name="name"
                    onChange={handleInputChange}
                    value={values.name}
                    type="text"
                    placeholder="Nombre"
                    className="form-control my-2"
                />
                {/* renderizado condicional */}
                {values.name.length < 4 && <h2>Nombre inválido</h2>}
                <input
                    name="lastName"
                    onChange={handleInputChange}
                    value={values.lastName}
                    type="text"
                    placeholder="Apellido"
                    className="form-control my-2"
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    placeholder="Email"
                    className="form-control my-2"
                />
                {!values.email.includes("@") && <h2>E-mail inválido</h2>}
                <input
                    name="emailConfirm"
                    onChange={handleInputChange}
                    value={values.emailConfirm}
                    type="email"
                    placeholder="Email"
                    className="form-control my-2"
                />
                {!values.emailConfirm !== values.email && (
                    <h2>E-mail inválido</h2>
                )}

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </section>
    );
};
