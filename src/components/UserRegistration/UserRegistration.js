import React, { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { GlitchEffect } from "../GlitchEffect/GlitchEffect";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext/UserContext.js";
import GoogleIcon from "@mui/icons-material/Google";
import "./UserRegistration.scss";
import { useNavigate } from "react-router";

export const UserRegistration = ({
    values,
    setValues,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    googleLoginHandler,
    anonymousLoginHandler,
    authType,
}) => {
    const navigate = useNavigate();

    const handleRegistration = () => {
        const auth = getAuth();
        console.log(values);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setValues({
                    user: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    weight: "",
                    weightRange: "",
                    showPassword: false,
                });
                navigate("/auth/login");
            });
    };

    return (
        <>
            <div className="login-container">
                <GlitchEffect
                    msg={"tu Planet Cuenta!"}
                    restMsg={"Estas cerca de disfrutar "}
                    site="login"
                ></GlitchEffect>
                <h2 className="login-title">
                    <span className="login-span"> </span>{" "}
                </h2>
                <Card className="registration-container" sx={{ maxWidth: 345 }}>
                    <div className="registration-inner-container">
                        <div className="registration-inner-center">
                            <CardMedia
                                component="img"
                                height="200"
                                image="../assets/images/loginFish.webp"
                                alt="loginFish"
                                className="registration-image"
                            />
                            <CardContent>
                                <div className="login-interaction-container">
                                    {" "}
                                    <div className="native-login">
                                        <Box
                                            component="form"
                                            sx={{
                                                "& > :not(style)": {
                                                    m: 1,
                                                    width: "25ch",
                                                },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            className="login-form"
                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="Nombre de Usuario"
                                                variant="filled"
                                                type="text"
                                                onChange={handleChange("user")}
                                                className="css-r47a1p-MuiFormControl-root"
                                            />
                                            <TextField
                                                id="filled-basic"
                                                label="E-mail"
                                                variant="filled"
                                                type="text"
                                                onChange={handleChange("email")}
                                                className="css-r47a1p-MuiFormControl-root"
                                            />
                                            <FormControl
                                                sx={{ m: 1, width: "25ch" }}
                                                variant="filled"
                                                className="login-form"
                                            >
                                                <InputLabel htmlFor="outlined-adornment-password">
                                                    Password
                                                </InputLabel>
                                                <FilledInput
                                                    id="outlined-adornment-password"
                                                    type={
                                                        values.showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    required
                                                    value={values.password}
                                                    onChange={handleChange(
                                                        "password"
                                                    )}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={
                                                                    handleClickShowPassword
                                                                }
                                                                onMouseDown={
                                                                    handleMouseDownPassword
                                                                }
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? (
                                                                    <VisibilityOff />
                                                                ) : (
                                                                    <Visibility />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                            </FormControl>
                                            <FormControl
                                                sx={{ m: 1, width: "25ch" }}
                                                variant="filled"
                                                className="login-form"
                                            >
                                                <InputLabel htmlFor="outlined-adornment-password">
                                                    Confirmar Password
                                                </InputLabel>
                                                <FilledInput
                                                    id="outlined-adornment-password"
                                                    type={
                                                        values.showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    required
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    onChange={handleChange(
                                                        "confirmPassword"
                                                    )}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={
                                                                    handleClickShowPassword
                                                                }
                                                                onMouseDown={
                                                                    handleMouseDownPassword
                                                                }
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? (
                                                                    <VisibilityOff />
                                                                ) : (
                                                                    <Visibility />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                        <CardActions className="registration-btn">
                            <Button size="small" onClick={handleRegistration}>
                                Registrarme
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </>
    );
};
