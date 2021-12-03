import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";
import { CartItem } from "../CartItem/CartItem.js";
import "./CartView.scss";
import { PathRoute } from "../Context/PathRoute/PathRoute.js";
import { LoaderComp } from "../LoaderComp/LoaderComp.js";

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
            <LoaderComp />
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
                                return <CartItem {...prod} key={prod.id} />;
                            })}
                            <div className="cart-view-total">
                                Total a Abonar: $ {totalCompras()}
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className="btn-actions-container">
                        <button onClick={ditchCart} className="btn btn-danger ">
                            VaciarCarrito
                        </button>
                        <button className="btn btn-success pay-btn">
                            Pagar
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h2>No hay nada por aquí</h2>
                </>
            )}
        </div>
    );
};
