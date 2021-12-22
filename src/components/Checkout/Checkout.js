import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";
import { validarDatos, validateEmail } from "./validarDatos.js";
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
    Timestamp,
} from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";
import { UserContext } from "../Context/UserContext/UserContext.js";
import { CartItem } from "../CartItem/CartItem.js";
import Swal from "sweetalert2";
import "./Checkout.scss";
import { createElement } from "react";

export const Checkout = () => {
    const { cart, totalCompras, ditchCart } = useContext(CartContext);

    const { signedUser, loggedIn } = useContext(UserContext);
    console.log(signedUser);
    console.log(loggedIn);

    const descriptionCheckout = useRef();

    const getLoggedUserName = (value) => {
        const nameArray = signedUser.user.displayName.split(/[\s,]+/);
        if (nameArray.length <= 3) {
            if (value === "name") {
                const [name] = nameArray;
                return name;
            } else {
                const [name, ...lastNames] = nameArray;
                return lastNames;
            }
        }
        console.log(nameArray);
    };

    const handleEnviar = () => {
        console.log(order);
    };

    const [values, setValues] = useState({
        name: `${
            loggedIn && signedUser.providerId === "google.com"
                ? getLoggedUserName("name")
                : ""
        }`,
        lastName: `${
            loggedIn && signedUser.providerId === "google.com"
                ? getLoggedUserName("lastName")
                : ""
        }`,
        email: `${
            loggedIn && signedUser.providerId === "google.com"
                ? signedUser.user.email
                : signedUser.user.providerData
                ? signedUser.user.email
                : ""
        }`,
        emailConfirm: `${
            loggedIn && signedUser.providerId === "google.com"
                ? signedUser.user.email
                : signedUser.user.providerData
                ? signedUser.user.email
                : ""
        }`,
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
            date: Timestamp.fromDate(new Date()),
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
                let index = 0;
                Swal.fire({
                    title: `¡Felicitaciones ${
                        signedUser.user.displayName || signedUser.displayName
                            ? signedUser.user.displayName ||
                              signedUser.displayName
                            : `${values.name} ${values.lastName}`
                    }!`,
                    html: ` <h5 class="buy-list-subtitle">Tu compra se realizó con éxito. Tu código de orden es el siguiente: <span class="buy-list-highlight"> ${
                        response.id
                    }</span> .</h5> 
                    <br class="buy-list-line-break"/>
                    <ul class="buy-list-container">
                    <h5 class="buy-list-text">Resumen de tu compra :</h5> <br class="buy-list-line-break" />
                       ${cart.map((prod) => {
                           index += 1;
                           return `<li class="buy-list-item"> ● &nbsp; Descripción: ${
                               prod.name
                           } | Precio Unit: $ ${Intl.NumberFormat().format(
                               prod.price
                           )} | Cantidad: ${prod.cartQuantity}
                           </li>  `;
                       })} </ul>`,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                });
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

    useEffect(() => {
        if (descriptionCheckout.current.children.length === 0) {
            cart.forEach((element) => {
                console.log(element);

                let elementData = document.createElement("ul");
                console.log(descriptionCheckout.current.children.length);

                elementData.innerText = `Producto: ${element.name}`;
                elementData.classList.add("checkout-description-list");
                let cant = document.createElement("li");
                let total = document.createElement("li");
                cant.innerText = `Cantidad: ${element.cartQuantity} unidades`;
                total.innerText = `Total: ${
                    element.price * element.cartQuantity
                }`;
                cant.classList.add("checkout-description-text");
                total.classList.add("checkout-description-text");

                elementData.appendChild(cant);
                elementData.appendChild(total);
                console.log(elementData);
                descriptionCheckout.current.innerHtml = elementData;
                descriptionCheckout.current.appendChild(elementData);
            });
        }
        console.dir(descriptionCheckout.current);
    }, []);

    console.log(values.name);

    return cart.length === 0 ? (
        <Navigate to="/" />
    ) : (
        <section className="checkout-order-container">
            <h2 className="checkout-section-title">Resumen de Compra</h2>
            <div
                ref={descriptionCheckout}
                className="checkout-description-container"
            >
                {}
            </div>
            <form
                action="container m-5"
                onSubmit={handleSubmit}
                className="checkout-form"
            >
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
                {values.name.length < 4 && (
                    <h2 className="error-message">
                        El nombre ingresado debe contener 4 o más caracteres
                    </h2>
                )}
                <input
                    name="lastName"
                    onChange={handleInputChange}
                    value={values.lastName}
                    type="text"
                    placeholder="Apellido"
                    className="form-control my-2"
                />
                {values.lastName.length < 3 && (
                    <h2 className="error-message">
                        El apellido ingresado debe tener 3 o más caracteres
                    </h2>
                )}

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    placeholder="Email"
                    className="form-control my-2"
                />
                {!validateEmail(values.email) && (
                    <h2 className="error-message">
                        El e-mail que ingresaste no es válido
                    </h2>
                )}
                <input
                    name="emailConfirm"
                    onChange={handleInputChange}
                    value={values.emailConfirm}
                    type="email"
                    placeholder="Email"
                    className="form-control my-2"
                />
                {values.emailConfirm !== values.email && (
                    <h2 className="error-message">
                        Los e-mail no coinciden, revisa el campo anterior
                    </h2>
                )}

                <button type="submit" className="btn btn-primary checkout-btn">
                    Enviar
                </button>
            </form>
        </section>
    );
};
