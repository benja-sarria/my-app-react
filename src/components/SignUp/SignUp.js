import React, { useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./SignUp.scss";
import { GlitchEffect } from "../GlitchEffect/GlitchEffect";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext/UserContext.js";
import GoogleIcon from "@mui/icons-material/Google";

export const SignUp = ({
    values,
    setValues,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    authType,
    googleLoginHandler,
    anonymousLoginHandler,
}) => {
    console.log(authType);
    const { signedUser } = useContext(UserContext);
    useEffect(() => {}, [authType]);
    console.log(signedUser);
    console.log(signedUser.user.displayName);

    return (
        <div className="login-container">
            <GlitchEffect
                msg={"Planet Sushi!"}
                restMsg={"Te damos la bienvenida a"}
                site="login"
            ></GlitchEffect>
            <h2 className="login-title">
                <span className="login-span"> </span>{" "}
            </h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="../assets/images/loginFish.webp"
                    alt="loginFish"
                />
                <CardContent>
                    {authType === "login" ||
                    signedUser.user.displayName === "" ? (
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
                                        label="User"
                                        variant="filled"
                                        type="text"
                                        onChange={handleChange("user")}
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
                                            onChange={handleChange("password")}
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
                                <Link
                                    to="/auth/register"
                                    className="register-link"
                                >
                                    ¿No tienes cuenta?
                                </Link>
                            </div>
                            <div className="other-logins-container">
                                <button
                                    className="login-btn"
                                    onClick={googleLoginHandler}
                                >
                                    <GoogleIcon />
                                    Ingresa con Google
                                </button>
                                <button
                                    className="login-btn anonymous"
                                    onClick={anonymousLoginHandler}
                                >
                                    Ingresa como Invitado/a
                                </button>
                            </div>
                        </div>
                    ) : authType === "register" ? (
                        "registrar"
                    ) : (
                        ""
                    )}
                </CardContent>
                <CardActions>
                    <Button size="small">Iniciar Sesión</Button>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </div>
    );
};
