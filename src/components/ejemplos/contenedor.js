export const contenedor = () => {
    return <div></div>;
};

// children es una manera que tiene react de permitirnos proyectar/translucir uno o más componentes dentro de otro

/* 

ejemplo de Children - Si en app enviamos:

<contenedor>
<HomeView
                    titulo="hola mundo"
                    contenido="bienvenidos a todos"
                    imagen={{
                        nombre: "benjamín",
                        apellido: "sarría ferrer",
                    }}
                />

                <HomeView
                    titulo="Chau!"
                    contenido="Nos vemos"
                    imagen={{
                        nombre: "benjamín",
                        apellido: "sarría ferrer",
                    }}
                />

</contenedor>

vamos a recibir una propiedad "children" con un array con los dos componentes que le pasamos como prop.


luego deberíamos en el componente separado contenedor poner lo siguiente: 

export const contenedor = ({children}) => {
    return <div>
    {children}
    </div>;
};

*/
