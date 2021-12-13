export const getSessionUser = (setUser, user, setReload, setLoggedIn) => {
    if (sessionStorage.getItem("sessionUser")) {
        console.log(Boolean(sessionStorage.getItem("sessionUser")));
        let storagedUser = sessionStorage.getItem("sessionUser");
        let parsedUser = JSON.parse(storagedUser);
        setUser(parsedUser);
        console.log(user);
        setReload(true);
        setLoggedIn(true);
    }
};
