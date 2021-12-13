export const sessionLogOut = (setUser, setReload, setLoggedIn) => {
    if (sessionStorage.getItem("sessionUser")) {
        sessionStorage.removeItem("sessionUser");
    }
    setReload(false);
    setLoggedIn(false);

    setUser({
        user: {
            displayName: "",
        },
    });
};
