import React, { useState } from "react";
import "./StockPanel.scss";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "firebase/firestore/lite";
import { database } from "../../firebase/config.js";
import Swal from "sweetalert2";
import { StockAdd } from "../StockAdd/StockAdd.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import AddIcon from "@mui/icons-material/Add";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { StockModify } from "../StockModify/StockModify.js";

export const StockPanel = () => {
    // Lo más versátil y mejor es lo siguiente con operadores spread:

    let { optionID } = useParams();

    const navigate = useNavigate();

    const Demo = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (event.target.innerText === "Agregar Productos a Base de Datos") {
            console.log("agregando");
            navigate("/stock/add");
        } else if (
            event.target.innerText === "Actualizar Productos en Base de Datos"
        ) {
            console.log("actualizando");
            navigate("/stock/update");
        } else if (
            event.target.innerText === "Eliminar Productos de Base de Datos"
        ) {
            console.log("eliminando");
            navigate("/stock/delete");
        }
        // navigate("/");
    };

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const usuario = "Admin";

    const [values, setValues] = useState({
        name: "",
        desc: "",
        price: "",
        img: "",
        stock: "",
        description: "",
        category: "",
    });

    const resetValues = (evt) => {
        console.log(evt);
        if (evt.target.innerText !== "Limpiar") {
            Swal.fire({
                title: "Listo!",
                text: "El producto fue añadido exitosamente a la Base de Datos",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "Formulario Limpiado",
                icon: "info",
                confirmButtonText: "Aceptar",
            });
        }
        setValues({
            name: "",
            desc: "",
            price: "",
            img: "",
            stock: "",
            description: "",
            category: "",
        });
    };

    const validateFullForm = () => {
        if (
            values.name !== "" &&
            values.desc !== "" &&
            values.price !== 0 &&
            values.img !== "" &&
            values.stock !== 0 &&
            values.description !== "" &&
            values.category !== ""
        ) {
            return true;
        } else {
            return false;
        }
    };

    const collectionRef = collection(database, "products");

    // para capturar los valores de los input solemos trabajar con estados en react - Guardo los values de un input en un estado

    const handleInputChange = (evt) => {
        if (evt.target.name === "price" || evt.target.name === "stock") {
            setValues({
                ...values,
                [evt.target.name]: Number(evt.target.value),
            });
        } else {
            setValues({
                ...values,
                [evt.target.name]: evt.target.value,
            });
        }
    };

    const handleAdd = (evt) => {
        evt.preventDefault();
        console.log(values);
        if (validateFullForm()) {
            addDoc(collectionRef, {
                ...values,
            }).then(() => {
                resetValues(evt);
            });
        } else {
            alert("no ingresaste un producto");
        }
    };

    console.log(values.name);

    return (
        <section className="stock-panel-section">
            {!optionID ? (
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Gestiona la Base de Datos
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) =>
                                    handleListItemClick(event, 0)
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Agregar Productos a Base de Datos"
                                    secondary={
                                        secondary ? "Secondary text" : null
                                    }
                                />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) =>
                                    handleListItemClick(event, 0)
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <UpgradeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Actualizar Productos en Base de Datos"
                                    secondary={
                                        secondary ? "Secondary text" : null
                                    }
                                />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) =>
                                    handleListItemClick(event, 0)
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <DeleteForeverIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Eliminar Productos de Base de Datos"
                                    secondary={
                                        secondary ? "Secondary text" : null
                                    }
                                />
                            </ListItemButton>
                        </List>
                    </Demo>
                </Grid>
            ) : optionID === "add" ? (
                <StockAdd
                    resetValues={resetValues}
                    usuario={usuario}
                    handleAdd={handleAdd}
                    handleInputChange={handleInputChange}
                    values={values}
                />
            ) : optionID === "update" ? (
                <StockModify />
            ) : (
                ""
            )}
        </section>
    );
};
