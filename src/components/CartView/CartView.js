import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";
import { CartItem } from "../CartItem/CartItem.js";
import "./CartView.scss";
import { PathRoute } from "../Context/PathRoute/PathRoute.js";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";
import emptyCart from "../../assets/images/emptyCart.webp";
import { Link } from "react-router-dom";

export const CartView = () => {
    const { cart, ditchCart, totalCompras } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    const { actualCategory, setActualCategory } = useContext(PathRoute);

    useEffect(() => {
        setActualCategory(window.location.pathname);
        setTimeout(() => {
            setLoading(false);
        }, 1050);

        return () => {
            setActualCategory(window.location.pathname);
        };
    }, [cart, loading]);
    return loading ? (
        <div>
            <LoaderComp message={"Cargando tu cart..."} />
            <div
                className={`backdrop-overlay ${
                    loading ? "visible" : "hidden"
                } list-container`}
            ></div>
        </div>
    ) : (
        <div>
            {cart.length > 0 ? (
                <>
                    <section className="cart-section">
                        <h2 className="cart-view-title">Tu Carrito</h2>
                        <div className="cart-content-container">
                            {cart.map((prod) => {
                                return (
                                    <CartItem
                                        prod={prod}
                                        key={prod.id}
                                        setLoading={setLoading}
                                    />
                                );
                            })}
                            <div className="cart-view-total">
                                Total a Abonar: ${" "}
                                {Intl.NumberFormat().format(totalCompras())}
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className="btn-actions-container">
                        <button onClick={ditchCart} className="btn btn-danger ">
                            VaciarCarrito
                        </button>
                        <Link to="/checkout">
                            <button className="btn btn-success pay-btn">
                                Pagar
                            </button>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <section className="cart-section empty-section">
                        <img
                            src={emptyCart}
                            alt="empty cart image"
                            loading="eager"
                        />
                        <h2 className="cart-view-title empty-cart">
                            No hay nada por aquí
                        </h2>
                        <Link to="/" className="btn btn-success back-btn">
                            <p className="back-text">Descubrir Productos</p>
                        </Link>
                    </section>
                </>
            )}
        </div>
    );
};
