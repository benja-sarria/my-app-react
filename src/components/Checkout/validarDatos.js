import Swal from "sweetalert2";

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
    if (!values.email.includes("@")) {
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
