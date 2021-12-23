import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.scss";
import { ItemProcessor } from "../ItemProcessor/ItemProcessor.js";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter.js";
import { GlitchEffect } from "../GlitchEffect/GlitchEffect.js";
import { UserContext } from "../Context/UserContext/UserContext";
import { capitalizeFirstLetter } from "../../helpers/capitalizeLetter.js";

export const ItemListContainer = ({
    greetingMsg,
    msgName,
    greetingFunction,
}) => {
    const [selectorsLoaded, setSelectorsLoaded] = useState(false);
    const [greeting, setGreeting] = useState("");
    console.log(greetingMsg);
    let path = "";
    let { catID } = useParams();

    const { signedUser, loggedIn, setSignedUser } = useContext(UserContext);
    console.log(signedUser);

    useEffect(() => {
        const determineName = () => {
            if (
                signedUser.user.displayName !== "" &&
                signedUser.user.displayName
            ) {
                const nameArray = signedUser.user.displayName.split(/[\s,]+/);
                const [name] = nameArray;
                return name;
            } else if (signedUser.user.email) {
                const composedUserArray = signedUser.user.email.split("@");

                console.log(composedUserArray[0]);
                const greeting = composedUserArray[0];
                const addingUsername = {
                    ...signedUser,
                    displayName: greeting,
                };
                console.log(signedUser);
                console.log(addingUsername);
                sessionStorage.removeItem("sessionUser");
                console.log(signedUser);
                let sessionUser = JSON.stringify(addingUsername);
                console.log(sessionUser);
                sessionStorage.setItem("sessionUser", sessionUser);
                setSignedUser({ ...addingUsername });

                setTimeout(() => {
                    setSignedUser({ ...addingUsername });
                    console.log(signedUser);
                }, 5000);
                console.log(signedUser);
                return greeting;
            } else {
                console.log(signedUser);
                const greeting = "Planet Sushi";
                return greeting;
            }
        };
        setGreeting(determineName());
    }, [greeting]);

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
                    <GlitchEffect
                        msg={
                            !catID
                                ? loggedIn
                                    ? `${greeting} !`
                                    : "Planet Sushi !"
                                : `${capitalizeFirstLetter(catID)} !`
                        }
                        restMsg={
                            !catID
                                ? loggedIn
                                    ? greetingMsg
                                    : `${greetingMsg} a`
                                : greetingMsg
                        }
                    />
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
