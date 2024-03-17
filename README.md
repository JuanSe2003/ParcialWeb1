# ParcialWeb1

# Ejecución:
1. Ejecute `npm install`
2. Ejecute `npm install bootstrap`
3. Ejecute `npm install react-router-dom`
4. Ejecute `npm install react-intl`

# Creacion del parcial
# Card.js
La función Card es un componente de React que renderiza una tarjeta con una imagen. Toma propiedades (props) como entrada y utiliza esas propiedades para configurar la imagen y el comportamiento del clic en la tarjeta. Finalmente, se agrega el evento onClick para que se ejecute la función handleClick cuando se haga clic en la imagen, para que se envie al Detail.

# Detail.js
El componente Detail devuelve un componente Modal de React Bootstrap. El modal muestra la imagen del libro obtenida de datosBuscar.image y tiene un encabezado con un título internacionalizado utilizando FormattedMessage. El cuerpo del modal contiene la imagen del libro y el pie del modal contiene un botón de cierre internacionalizado.

El componente utiliza el hook useNavigate de React Router para obtener una función de navegación que se utilizará más adelante. También utiliza el hook useState para mantener el estado de visibilidad del modal, inicializado en true. La función handleClose se ejecuta cuando se cierra el modal. Establece el estado de visibilidad del modal en false y utiliza la función de navegación para redirigir al usuario a la página de inicio ("/home").

# Header.js
La función Header es un componente de React que muestra la información del usuario en la parte superior de la página. Toma una propiedad llamada userData como entrada.

El componente utiliza el hook useNavigate de React Router para obtener una función de navegación que se utilizará más adelante. Luego, define una función handleClick que se ejecuta cuando se hace clic en la información del usuario. Esta función utiliza la función de navegación para redirigir al usuario a la página de usuario ("/user").

El componente Header devuelve un contenedor <div> con la clase "header-container". Dentro de este contenedor, si se proporciona la propiedad userData, se muestra la información del usuario. La información incluye una imagen de perfil, el nombre y apellido del usuario, y algunas estadísticas. Al hacer clic en la información del usuario, se ejecuta la función handleClick para redirigir al usuario a la página de usuario.

# Home.js
Esta función representa la página principal (Home) de una aplicación que muestra una galería de tarjetas (Card) con las imagenes. Cada tarjeta cuando se le hace click se muestra el model . La función también incluye un encabezado (Header) que muestra los datos del usuario actual. Los datos de los usuarios se obtienen mediante una solicitud fetch a un archivo JSON externo.

# Internacionalización
Creé una carpeta llamada locales que contiene dos archivos: en.json (inglés) y es.json (español). Ambos archivos tienen las mismas claves, pero los valores asociados son diferentes según el idioma. Cada clave se utiliza para representar etiquetas y botones en la aplicación.

En el archivo index.js, se establecen dos variables cruciales: userLanguage y jsonToUse. La variable userLanguage verifica el idioma configurado en el navegador o el seleccionado por el usuario en la aplicación, mientras que jsonToUse se utiliza para determinar qué archivo JSON se debe usar en función del idioma detectado, donde si el idioma es "es-ES", se utilizará el archivo es.json, y si no, se recurrirá al archivo en.json.

La función <FormattedMessage id="" /> para cada etiqueta o botón que requiere internacionalización. Se pasó un id específico para cada componente que corresponde a una clave en el archivo JSON correspondiente. De esta manera, se logró la internacionalización de la aplicación.

# Perfil.js
Este componente de React llamado Perfil se encarga de renderizar la información de perfil de un usuario. Recibe dos props: userData y editable.

userData es un objeto que contiene la información del usuario, como su nombre, apellido, cantidad de seguidores, cantidad de publicaciones, descripción e imagen de perfil.

editable es un booleano que indica si el perfil debe ser editable o no.

Si editable es false, el componente renderiza la información del usuario de forma no editable, mostrando los datos en etiquetas p dentro de un contenedor con la imagen de perfil.

Si editable es true, el componente renderiza la información del usuario en campos de entrada de texto (input). Utiliza la función Object.entries para iterar sobre las propiedades del objeto userData y crear un campo de entrada para cada propiedad. Estos campos de entrada se muestran dentro de un contenedor con la imagen de perfil.
