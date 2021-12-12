import Swal from "sweetalert2";

const mailRegEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validateEmail = (email) => {
    console.log(String(email).toLowerCase().match(mailRegEx));
    return String(email).toLowerCase().match(mailRegEx);
};

export const validarDatos = (values) => {
    // validar los datos de los mensajes de validación que se renderizan abajo
    if (values.name.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
        });

        return true;
    }

    if (values.lastName.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Apellido inválido",
        });
        return true;
    }
    if (!validateEmail(values.email)) {
        Swal.fire({
            icon: "error",
            title: "email inválido",
        });
        return true;
    }
    /*  if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: "error",
            title: "email inválido",
        });
        return;
    } */

    return false;
};
