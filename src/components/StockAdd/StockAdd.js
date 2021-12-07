import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

export const StockAdd = ({
    resetValues,
    usuario,
    handleAdd,
    handleInputChange,
    values,
}) => {
    const navigate = useNavigate();
    const handleVolver = () => {
        navigate(-1);
    };

    return (
        <>
            <IconButton
                aria-label="back"
                color="primary"
                onClick={handleVolver}
                className="back-btn special-back-btn"
            >
                <ArrowBackIcon />
                <span className="back-text"> Atrás</span>
            </IconButton>
            <h2 className="stock-panel-title">
                Bienvenido {usuario} a nuestro Administrador de Stock
            </h2>
            <p className="stock-panel-text">
                Completando este formulario podrás agregar productos a la Base
                de Datos:
            </p>
            <form action="container m-5" onSubmit={handleAdd} className="add">
                {/* al poner el name para usar el handleinputchange tengo que usar el nombre de cada propiedad del objeto, para que la tome en el evt.target.name */}
                <label htmlFor="name" className="label"></label>
                <input
                    name="name"
                    onChange={handleInputChange}
                    value={values.name}
                    type="text"
                    placeholder="name"
                    className="form-control my-2"
                />
                <label htmlFor="desc" className="label"></label>
                <input
                    name="desc"
                    onChange={handleInputChange}
                    value={values.desc}
                    type="text"
                    placeholder="desc"
                    className="form-control my-2"
                />
                <label htmlFor="price" className="label"></label>
                <input
                    name="price"
                    onChange={handleInputChange}
                    value={values.price}
                    type="number"
                    placeholder="price"
                    className="form-control my-2"
                />
                <label htmlFor="img" className="label"></label>
                <input
                    name="img"
                    onChange={handleInputChange}
                    value={values.img}
                    type="text"
                    placeholder="img"
                    className="form-control my-2"
                />
                <label htmlFor="stock" className="label"></label>
                <input
                    name="stock"
                    onChange={handleInputChange}
                    value={values.stock}
                    type="number"
                    placeholder="stock"
                    className="form-control my-2"
                />
                <label htmlFor="description" className="label"></label>
                <input
                    name="description"
                    onChange={handleInputChange}
                    value={values.description}
                    type="text"
                    placeholder="description"
                    className="form-control my-2"
                />
                <label htmlFor="category" className="label"></label>
                <input
                    name="category"
                    onChange={handleInputChange}
                    value={values.category}
                    type="text"
                    placeholder="category"
                    className="form-control my-2"
                />
                <div className="btn-container">
                    <div onClick={resetValues} className="btn btn-outline">
                        Limpiar
                    </div>
                    <button type="submit" className="btn btn-success">
                        Agregar Producto
                    </button>
                </div>
            </form>
        </>
    );
};
