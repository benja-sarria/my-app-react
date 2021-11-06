import "./homeView.scss";

// los componentes pueden recibir valores de los elementos padres - esto se denominan PROPS (propiedades) - Es decir siempre reciben un parámetro que es un objeto que se denomina PROPS - para pasárselos tenemos que hacerlo desde la app - Por defecto siempre recibe ese objeto, como los eventos reciben el evt.
export const HomeView = ({ contenido, imagen, titulo }) => {
    // console.log(props);
    // en vez de listar props.algo se suele aplicar destructuring - siempre se trabaja con destructuring en react - El nombre de la desestructuración tiene que se idéntico al nombre de las propiedades que le estamos pasando desde app.js

    // puedo hacerlo así, o destructurando el parámetro
    /* const { titulo, contenido } = props; */

    // destructuración del objeto que recibimos como props
    const { nombre, apellido } = imagen;

    return (
        <div className="homeview">
            <h2>{titulo}</h2>
            <hr />

            <p>{contenido}</p>
            <p>
                Me llamo {nombre}
                <br />
                {apellido}
            </p>
        </div>
    );
};

/* Los COMPONENTES DE PRESENTACIÓN son los que se dedican a la vista de algo (sin estado) - Los componentes de presentación reciben valores y se encargan de presentar una vista de dichos valores. No contiene una lógica adicional. Las cards de productos serían componentes de presentación - Se orientan al aspecto visual, no tienen dependencia de fuentes de datos - Reciben callbacks por medio de props - normalmente no tienen estados

Los Estados en un componente son valores que definimos como CONTROL, cuando se modifica genera una nueva vista del componente

LOS COMPONENTES CONTENEDORES:  se encargan de contener a otros. También tienen una lógica de control - Contienen los arrays que vamos a renderizar, etc. Renderiza otros componentes de presentación. Están orientados al funcionamiento de la aplicación, contiene componentes de presentación y otros contenedores, se comunican con las fuentes de datos (contienen la lógica de la aplicación y procesarla), usualmente tienen ESTADO
*/
