import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({
    signedUser,
    setSignedUser,
    children,
    loggedIn,
    setLoggedIn,
    setReload,
}) => {
    return (
        <UserContext.Provider
            value={{
                setSignedUser,
                signedUser,
                loggedIn,
                setLoggedIn,
                setReload,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
