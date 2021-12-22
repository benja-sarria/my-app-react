import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./CategoryFilter.scss";
import { styled } from "@mui/material/styles";

export const CategoryFilter = () => {
    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            {...props}
        />
    ))(({ theme }) => ({
        "& .MuiPaper-root": {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 145,
            color:
                theme.palette.mode === "light"
                    ? "rgb(55, 65, 81)"
                    : theme.palette.grey[300],
            boxShadow:
                "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            "& .MuiMenu-list": {
                padding: "4px 0",
                backgroundImage:
                    "background-image: linear-gradient(to bottom, rgba(var(--globalGreenHighlight-background-color-r),var(--globalGreenHighlight-background-color-g),var(--globalGreenHighlight-background-color-b),0.25),transparent);",
                backgroundColor: "#212529",
            },
            "& .MuiMenuItem-root": {
                "& .MuiSvgIcon-root": {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                "&:active": {
                    backgroundColor:
                        "alpha(theme.palette.primary.main,theme.palette.action.selectedOpacity)",
                },
            },
        },
    }));

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

    return (
        <div className="category-selector-container">
            <Button
                id="basic-button-1"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="categories-btn"
            >
                <span className="categories-text"> Categorías </span>
                <FilterListIcon className="categories-icon" />
            </Button>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                className="basic-menu-1"
            >
                <MenuItem onClick={handleClose} className="selector-item">
                    <Link to="/category/comidas" className="selector-link">
                        Comidas
                    </Link>
                </MenuItem>
                <hr className="divisor" />
                <MenuItem onClick={handleClose} className="selector-item">
                    <Link to="/category/bebidas" className="selector-link">
                        Bebidas
                    </Link>
                </MenuItem>
                <hr className="divisor" />
                <MenuItem onClick={handleClose} className="selector-item">
                    <Link to="/category/vajilla" className="selector-link">
                        Vajilla
                    </Link>
                </MenuItem>
            </StyledMenu>
        </div>
    );
};
