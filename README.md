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

Tu tarea consistiráa en mejorar el ecommerce mediante el uso de hooks. Para ello, deberás añadir fucionalidades que supongan un uso más eficiente de la aplicación. La lista de funcionalidades que debes tener en cuenta son las siguientes:

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