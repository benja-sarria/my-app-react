import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./ItemListContainer.scss";
import { ItemProcessor } from "../ItemProcessor/ItemProcessor.js";
import { useNavigate } from "react-router-dom";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter.js";

export const ItemListContainer = ({ greeting, greetingFunction }) => {
    let navigate = useNavigate();
    const [selectors, setSelectors] = useState(
        document.querySelectorAll(".selector-item")
    );
    const [selectorsLoaded, setSelectorsLoaded] = useState(false);

    // for the menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setSelectorsLoaded(!selectorsLoaded);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let path = "";
    let { catID } = useParams();

    const processingSelection = (evt) => {
        console.log(evt.target.innerText);
        path = evt.target.innerText.toLowerCase();
        // navigate(`/category/${path}`);
    };

    const handleSelect = () => {
        console.log("ejecutando handleselect");
        console.log(document.querySelectorAll(".selector-item"));
        for (let selector of document.querySelectorAll(".selector-item")) {
            console.log(selector);
            selector.addEventListener("click", processingSelection);
        }
    };

    useEffect(() => {
        console.log("se cargo de vuelta");
        setSelectors(document.querySelectorAll(".selector-item"));
        if (selectors.length === 0) {
            setSelectorsLoaded(false);
        }
        handleSelect();
        console.log(selectors);
    }, [selectorsLoaded, path]);

    greetingFunction && greetingFunction(catID);
    console.log(greetingFunction);
    console.log(catID);
    return (
        <div className="container-fluid">
            <h2 className="section-title">{greeting}</h2>
            <CategoryFilter />
            <ItemProcessor catID={catID} />
        </div>
    );
};
