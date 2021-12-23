import React, { useEffect, useContext } from "react";
import { SignUp } from "../SignUp/SignUp";
import { useParams, useNavigate } from "react-router";
import { UserContext } from "../Context/UserContext/UserContext.js";
import { UserRegistration } from "../UserRegistration/UserRegistration.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const Login = ({ setReload, setLoggedIn, location }) => {
    const { authType } = useParams();

    const navigate = useNavigate();

    const { signedUser, setSignedUser } = useContext(UserContext);

    const createdAccountHandler = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setSignedUser(userCredential);
                console.log(signedUser);
                let sessionUser = JSON.stringify(userCredential);
                console.log(sessionUser);
                sessionStorage.setItem("sessionUser", sessionUser);
                setReload(true);
                setLoggedIn(true);
                navigate("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const anonymousLoginHandler = () => {
        setSignedUser({
            user: {
                displayName: "Usuario",
            },
        });
        setReload(true);
        let sessionUser = JSON.stringify(signedUser);
        console.log(sessionUser);
        sessionStorage.setItem("sessionUser", sessionUser);

        navigate("/");
    };

    useEffect(() => {}, []);

    const googleLoginHandler = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const googleLoginData = res;
                setSignedUser(res);
                console.log(signedUser);
                navigate("/");
                let sessionUser = JSON.stringify(res);
                console.log(sessionUser);
                sessionStorage.setItem("sessionUser", sessionUser);
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
        confirmPassword: "",
        email: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        console.log(authType);
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
            {authType === "login" ? (
                <SignUp
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    authType={authType}
                    googleLoginHandler={googleLoginHandler}
                    anonymousLoginHandler={anonymousLoginHandler}
                    createdAccountHandler={createdAccountHandler}
                ></SignUp>
            ) : (
                <UserRegistration
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    authType={authType}
                    googleLoginHandler={googleLoginHandler}
                    anonymousLoginHandler={anonymousLoginHandler}
                />
            )}
        </>
    );
};
