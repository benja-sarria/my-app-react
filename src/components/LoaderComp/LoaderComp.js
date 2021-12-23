import { React } from "react";
import Box from "@mui/material/Box";
import "./LoaderComp.scss";
import FillingBottle from "react-cssfx-loading/lib/FillingBottle";

export const LoaderComp = ({ message }) => {
    return (
        <div className="loader-container">
            <h2 className="loading-sign">{message}</h2>
            <Box sx={{ display: "flex" }}>
                <FillingBottle
                    color="aquamarine"
                    width="50px"
                    height="50px"
                    duration="3s"
                    className="loading-square"
                />
            </Box>
        </div>
    );
};
