import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({
    signedUser,
    setSignedUser,
    children,
}) => {
    /*  const [signedUser, setSignedUser] = useState({
        user: {
            displayName: "",
        },
    }); */

    return (
        <UserContext.Provider value={{ setSignedUser, signedUser }}>
            {children}
        </UserContext.Provider>
    );
};
