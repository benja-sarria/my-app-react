<div style="line-height: 1.8em; font-size: 1.2em">

# <b>Acerca de Planet Sushi</b>

`Planet Sushi` es un mock-up de plataforma de e-commerce desarrollado con la finalidad de brindar el completo abanico de funcionalidades que debe contemplar un sitio de tal categoría.

Su desarrollo y estructura se realizó en consonancia con las consignas planteadas para la entrega del trabajo final para el curso de `React JS` de CoderHouse.

<i><span style="color: aquamarine">ATENCIÓN: En caso de que no desees leer todo el documento, recomendamos saltear hasta la `Sección 4` del `Funcionamiento con Firebase`, para ingresar con cuenta Admin y comprobar las funcionalidades en su totalidad</span></i>

<br />

# Funcionamiento con Firebase

Planet Sushi consume el servicio gratuito de Firebase, a los fines de la utilización de Base de Datos no relacional, así como los servicios de autenticación de usuarios.

<br />

## <span style="color: rgb(126, 216, 193)">1. Crea tu propia cuenta en el sitio</span>

En `Planet Sushi` puedes crear tu propia cuenta local. Las validaciones para la creación no se encuentran 100% terminadas; pero en la versión actual, cumpliendo con los requisitos de cuenta que incorpora automáticamente Firebase, serás capaz de crear tu propia cuenta.

Dentro de la App, queda pendiente implementar la función del Panel de Usuario, para gestión de órdenes activas.

<hr />
<br />

## <span style="color: rgb(126, 216, 193)">2. Accede con cuenta de Google o como Invitado</span>

Puedes también optar por acceder con `cuenta de Google`, así como también como `invitado`. En todos los casos, la `UI se personaliza` para dar una mejor experiencia de usuario. Asimismo encontrarás facilidades a la hora de incorporar los datos en el checkout.

<hr />
<br />

## <span style="color: rgb(126, 216, 193)">3. Carrito Persistente</span>

Se implemento la funcionalidad de guardar en el Session Storage la información relacionada tanto al Cart como a la sesión iniciada. Con lo cual, el recargar la página, no produce la pérdida de ninguna de esta información `[Debe el usuario esperar unos segundos hasta que la app recupere la información]`.

En conjunto con esta idea de persistencia, se implementó que `el carrito no se vacíe al cerrar la sesión de usuario`, permaneciendo en el session storage. Al iniciar nuevamente la sesión, la `App compara el ID de usuario de la última sesión con el ID del usuario que se está logueando`, en caso de coincidir, recupera el carrito, de lo contrario, procede a descartarlo.

Probablemente la solución ideal sería almacenar dicho dato en el servidor, a los fines de que resguarde de mejor manera la privacidad de la sesión, quedará para una futura implementación.

<hr />
<br />

## <span style="color: rgb(126, 216, 193)">4. Gestor de Base de Datos</span>

Se creó un panel dedicado para la gestión remota de la Base de Datos de Firebase. Para acceder al mismo, es necesario contar con las credenciales `[ID]` autorizadas.

<br />
<ul>
<li>
Cuenta: admin@admin.com
</li>
<li>
Pass: admin123
</li>

</ul>
<br />

`[CREA]`- Una vez dentro del Panel de Stock (ubicado en el Drawer del Navbar) el usuario puede ingresar los datos para la carga de un nuevo producto, lo que `crea un nuevo documento dentro de la colección "Productos"` con la información estipulada.

<br />

`[MODIFICA]`- Asimismo, puede acceder a la sección de modificación del stock actual, en donde los productos se listan en cards, con un Select para la cantidad del producto.` El mero cambio en el select "comitea" la actualización del Batch`, plasmando de manera instantánea el cambio en la Base de Datos.

<br />

`[ELIMINA]`- La función de eliminar productos de la Base de Datos de manera remota todavía no se encuentra implentada.

</div>

<hr />
<br />
<i style="color: grey;">Usual React considerations follows...</i>
<br />
<hr />
<br />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
