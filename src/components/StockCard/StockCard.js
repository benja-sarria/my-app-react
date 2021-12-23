import React, { useState, useEffect } from "react";
import { SelectLabels } from "./MaterialUiSelect.js";

// si recibo el objeto lo recibo export const Item = ({ prod })  // sino lo recibo así

export const StockCard = ({
    id,
    name,
    desc,
    price,
    img,
    stock,
    handleModify,
    determineActualStock,
}) => {
    const [actualStock, setActualStock] = useState(stock);
    useEffect(() => {}, [stock, actualStock]);

    return (
        <article className="card">
            <img src={img} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title main-page-title">{name}</h5>
                <hr className="divisor" />
                <p className="card-text main-page-text">{desc}</p>
                <SelectLabels
                    id={id}
                    setActualStock={setActualStock}
                    actualStock={actualStock}
                    handleModify={handleModify}
                />
                <br />
            </div>
        </article>
    );
};
