#### ¿Qué es un sistema de routing?
Pensando en aquellas personas que comienzan con Angular su incursión en las "SPA" (Single Page Application), comenzaremos aclarando qué es un sistema de routing y por qué lo necesitamos.

En cualquier sitio web generalmente tienes varias direcciones que son entregadas por un servidor, para mostrar diferentes contenidos del sitio. Podemos tener una portada, una página de productos, una de contacto, etc. Cada una de esas páginas se presenta en una ruta diferente del sitio web, que podrían ser como example.com, example.com/productos/index.html, example.com/contacto.html, etc. Cada una de esas rutas podría tener un archivo HTML, que se sirve con el contenido de esa sección.
Sin embargo, en las aplicaciones Angular sólo tenemos una página, el index.html y toda la acción se desarrolla dentro de esa página. En Angular lo común es que el index sólo tenga un componente en su BODY y realmente toda la acción se desarrollará en ese componente. Todas las "páginas" (pantallas o vistas) del sitio web se mostrarán sobre ese índex, intercambiando el componente que se esté visualizando en cada momento.
Para facilitar la navegación por un sitio donde realmente sólo hay un index, existe lo que llamamos el sistema de routing, que tiene el objetivo de permitir que en el sitio web haya rutas internas, respondiendo a rutas "virtuales" como las que existen en los sitios tradicionales.

Llamamos "virtuales" a esas rutas, porque realmente sólo existe un "index.html", no habrá un archivo "contacto.html" o "productos.html" para cada ruta, sino que será realmente siempre el "index.html" el que se entregue al navegador.

El sistema de routing es el encargado de reconocer cuál es la ruta que el usuario quiere mostrar, presentando la pantalla correcta en cada momento. Esto es útil por varios motivos, entre ellos:

1. Permite que la aplicación responda a rutas internas. Es decir, no hace falta entrar siempre en la pantalla principal de la aplicación y navegar hasta la pantalla que queremos ver realmente.
2. Permite que el usuario pueda usar el historial de navegación, yendo hacia atrás y hacia adelante con el navegador para volver a una de las pantallas de aplicación que estaba viendo antes.

#### Routing con Angular
Angular nos ofrece un componente que nos ayuda con el routing que se llama <router-outlet>.Está compuesto por varios actores que tienen que trabajar juntos para conseguir los objetivos planteados.

Elementos básicos que forman parte de él y que son necesarios para comenzar a trabajar:

- El módulo del sistema de rutas: llamado RouterModule.
- Rutas de la aplicación: es un array con un listado de rutas que nuestra aplicación soportará.
- Enlaces de navegación: son enlaces HTML en los que incluiremos una directiva para indicar que deben funcionar usando el sistema de routing.
- Contenedor: donde colocar las pantallas de cada ruta. Cada pantalla será representada por un componente.

En el siguiente [enlace](https://desarrolloweb.com/articulos/introduccion-sistema-routing-angular.html) hay información más detallada de cómo utilizar el sistema de routing en Angular.

En este otro [enlace](https://docs.angular.lat/tutorial/toh-pt5) puedes consultar la documentación oficial de Angular
para que puedas implementar el sistema de routing.