import { getAuth, signOut } from "firebase/auth";

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
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
    window.location.pathname = "/auth/login";
};
