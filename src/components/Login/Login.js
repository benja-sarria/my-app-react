import React, { useEffect, useState, useContext } from "react";
import { SignUp } from "../SignUp/SignUp";
import { useParams, useNavigate } from "react-router";
import { app } from "../../firebase/config.js";
import { UserContext } from "../Context/UserContext/UserContext.js";

import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
} from "firebase/auth";

export const Login = ({ setReload, setLoggedIn }) => {
    const { authType } = useParams();

    const navigate = useNavigate();

    const { signedUser, setSignedUser } = useContext(UserContext);

    const anonymousLoginHandler = () => {
        setSignedUser({
            user: {
                displayName: "Usuario",
            },
        });
        setReload(true);
    };

    const googleLoginHandler = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const googleLoginData = res;
                setSignedUser(res);
                console.log(signedUser);
                navigate("/");
                setReload(true);
                setLoggedIn(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [values, setValues] = React.useState({
        user: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <SignUp
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                authType={authType}
                googleLoginHandler={googleLoginHandler}
                anonymousLoginHandler={anonymousLoginHandler}
            ></SignUp>
        </>
    );
};
