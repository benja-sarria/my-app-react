import { stock } from "../data/stock.js";

export const PedirDatos = async (valor) => {
    console.log("Resolviendo Promesa");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock);
        }, 1600);
    });
};
