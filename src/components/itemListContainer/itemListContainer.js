import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.scss";
import { ItemProcessor } from "../ItemProcessor/ItemProcessor.js";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter.js";
import { GlitchEffect } from "../GlitchEffect/GlitchEffect.js";

export const ItemListContainer = ({
    greetingMsg,
    msgName,
    greetingFunction,
}) => {
    const [selectorsLoaded, setSelectorsLoaded] = useState(false);
    console.log(greetingMsg);
    let path = "";
    let { catID } = useParams();

    greetingFunction && greetingFunction(catID);
    console.log(greetingFunction);
    console.log(catID);
    return (
        <div className="container-fluid">
            <h2
                className={`section-title ${
                    greetingMsg.includes("bienvenida")
                        ? "short-section"
                        : "long-section"
                }`}
            >
                <span className="special-msg">
                    <GlitchEffect msg={msgName} restMsg={greetingMsg} />
                </span>{" "}
            </h2>

            <CategoryFilter />
            <ItemProcessor
                catID={catID}
                setSelectorsLoaded={setSelectorsLoaded}
            />
        </div>
    );
};
