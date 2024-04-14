# Especialización en React. Creación de un ecommerce.

**David Pérez Ruiz**

*Bootcamp Qualentum*

## Lab 1. Crea un ecommerce estático con React.

Se solicita la creación de un ecommerce estático en React, sin mucha interactividad todavía. Sírvete de la captura adjuntada en el campus para basarte en la construcción de la web. Interpreta dicha captura para obtener los componentes lo más aislados posible, manteniendo el sentido y teniendo en cuenta su reutilización o aislamiento.

En la sección principal se renderizarán los componentes en forma de tarjetas cuya información vendrá definida en el archivo JSON proporcionado. De esta forma, cada tarjeta representará un producto en concreto.

### Consideraciones generales

1. Los elementos del encabezado no deben tener funcionalidad **salvo la barra de búsqueda de productos**. esta debe filtrar los productos por su nombre. En la sección de productos aparecerán solo aquellos cuyo nombre contenga el texto introducido por el usuario en la barra de búsqueda.
2. El primer renderizado de la aplicación debe mostrar todos los productos.
3. Presta atención a los posibles inconvenientes en cuanto a la estructura de componentes. Cuida la comunicación de un elemento padre con sus hijos y viceversa para llevar a cabo la interactividad de la barra de búsqueda.

## Lab 2. Añade nuevas funcionalidades con hooks.

Tu tarea consistirá en mejorar el ecommerce mediante el uso de hooks. Para ello, deberás añadir fucionalidades que supongan un uso más eficiente de la aplicación. La lista de funcionalidades que debes tener en cuenta son las siguientes:

* **Funcionalidad de la cesta:** añade botones a las tarjetas de los productos para añadirlos a la cesta.
*  **Estado de la cesta:** visualizar en el icono de la cesta la caantidad actual de produstos en la cesta y que se actualice con cada nuevo añadido.
*  **Comprobar mi cesta:** al pulsar en el icono de la cesta, ver una nueva sección con los productos añadidos, con unidades de cada producto y precio total.

    *Observaciones:* esta sección debe sustituir a la sección de productos, la cual se volverá a mostrar tras pulsar el logo de la tienda.
    
* **Modo claro/oscuro:** cambiaar el modo de oscuro a claro y viceversa al pulsar un nuevo icono el la lista de iconos.
* **Autenticación de usuario:** hacer *login* y *logout* en el ecommerce.

    *Observaciones:* crea un formulario sencillo siempre visible. Debe contar con unas validaciones mínimas y al hacer *login* y *logout*, debe guardar o eliminar los datos del usuario del *LocalStorage*.

* **Mensaje personalizado a usuario:** muestra un mensaje personalizado en el banner publicitario dependiendo de si el usuario está logueado o no.
    * *Usuario logueado:* ¡(NombreDelUsuario), 
aprovéchate de tu 20 % de descuento!
    * *Usuario no logueado:* crea una cuenta para 
disfrutar de nuestros descuentos.

Ten en cuenta que no debes crear páginas, pues todos estos componentes se mostrarán en secciones que los contengan dentro del componente raíz *\<App /\>*.

## Lab 3. Enruta el ecommerce con hooks.

El objetivo principal de esta prueba es aprender y ser capaz de usar los procesos de enrutado de aplicaciones mediante el uso de la librería React Router. Para ello, te pedimos que generes nuevas páginas y gestiones las rutas utilizando *createBrowserRouter*.

Para resolver el problema con éxito debes añadir las siguientes funcionalidades:

* **Base del enrutado:** créala con *createBrowserRouter*, teniendo en cuenta que las funcionalidades previamente instaladas no se pierdan. Las rutas que compartimos son las siguientes:
    *  En el *path "/"* deberá figurar el componente *ProductSection*.
    *  En el *path "/login"* , el componente de formulario de inicio de sesión.
    *  En el *path "/cart"*, el componente del resumen de la cesta.
*  **Página de detalles del producto:** crea la vista de una página con los detalles del producto al hacer clic en una tarjeta de producto.
  
    *Observaciones:*  esta vista debe tener un botón que permita volver a la página principal y otro que deje añadir el producto a la cesta. La ruta de esta vista será *"/product/:id"*.

* **Layout homogéneo:** en todas las rutas deben aparece el header, el banner y el footer.
* **Iconos que permitan la navegación:** el icono de la tienda (esquina superior izquierda) y los de la cesta redirijan a la página principal y al resumen de la cesta respectivamente.

    *Observaciones:* persiste los datos de la cesta en *LocalStorage* para que no se pierdan en la navegación.

* **Estados finales de la cesta:** añade un botón de finalizar la compra y otro para vaciar la cesta en la página del resumen de la cesta.

    *Observaciones:* finalizar la compra será simplemente una alerta con un mensaje y, posteriormente, se eliminarán todos los productos de la cesta.

* **Impedir comprar a usuarios no autenticados:** oculta los botones de añadir a la cesta a usuarios que no estén autenticados.
* **Restringir información a usuarios no autenticaados:** los usuarios no autenticados no podrán acceder al contenido de detalles del producto ni al resumen de la cesta. Por lo tanto, deben redirigir en ambos caso al formulario de *login* si intentan dichas acciones.
* **Mejora de UX tras login:** cuando un usuario inicie sesión, debe ser redirigido a la ventana que iba a acceder. Y, al cerrar sesión, volver a la página principal.
* **Mejora de UX tras error:** muestra una página de eerror predeterminada si los usuarios navegan hacia una ruta no controlada.

No es recomendable que intentes generar desde cero el router para el *provider* con todos los componentes creados. Empieza con el componente raíz de la versión anterior y ve incrementando las rutas y contenidos uno a uno.

## Lab 4. Añade operaciones CRUD a tu proyecto.

El objetivo principal es agregar al ecommerce la capacidad de servir los productos desde una API y generar un CRUD para acturar sobre los mismos.

Para resolverlo con éxito, incluye las siguientes funcionalidades:

* **Reglas para usuarios administradores:** si el email del usuario que se registra es *"@admin"*, se le atribuirá un rol de administrador. Almacenaremos este dato en *LocalStorage*.
* **Acciones permitidas para los administradores:** añadir, eliminar y modificar productos.

    *Observaciones:* añade botones o iconos para editaar y eliminar un producto en cada tarjeta y un botón con una posición fija que permita incluir un producto nuevo solo visible para los administradores.

* **Conexión a nuestra API:** crea una API con JSON-Server y conecta las operaciones CRUD de la US-2 a ella.

Es recomendable empezar por la gestión de productos en el estado global, crear las operaciones CRUD y, después, conectar la API cuando todo funcione de manera correcta.