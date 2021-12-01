import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";

import "./ItemListContainer.scss";
import { ItemProcessor } from "../ItemProcessor/ItemProcessor.js";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter.js";

export const ItemListContainer = ({ greeting, greetingFunction }) => {
    const [selectorsLoaded, setSelectorsLoaded] = useState(false);

    let path = "";
    let { catID } = useParams();

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
