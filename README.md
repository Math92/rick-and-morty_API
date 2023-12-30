# Rick y Morty API - Explorador de Personajes 🌌

## Introducción 🚀

Este proyecto es una aplicación web interactiva que permite a los usuarios explorar personajes del universo de "Rick y Morty" a través de la API oficial proporcionada por [rickandmortyapi.com](https://rickandmortyapi.com/). La aplicación fue diseñada para ser intuitiva y fácil de usar, brindando a los fans una manera directa de obtener información detallada sobre sus personajes favoritos.

## Características ✨

- **Búsqueda de Personajes**: Los usuarios pueden seleccionar un personaje de una lista desplegable poblada dinámicamente con los nombres de los personajes disponibles en la API. 🔍
- **Visualización de Detalles**: Al seleccionar un personaje, la aplicación muestra una imagen y detalles importantes como el nombre, estado (vivo o muerto), especie, género, y la ubicación y origen del personaje. 📝
- **Diseño Responsivo**: La aplicación se ajusta para verse bien en dispositivos de diferentes tamaños, incluyendo pantallas pequeñas como las de los teléfonos móviles. 📱
- **Estética Atractiva**: Incorpora un fondo temático de "Rick y Morty" que mejora la experiencia del usuario sin distraer de la funcionalidad principal. 🎨

## Tecnologías Utilizadas 💻

- **HTML5**: Para la estructura y el contenido de la página.
- **CSS3**: Para el diseño visual, incluyendo media queries para la responsividad.
- **JavaScript**: Para la interactividad y la comunicación con la API de "Rick y Morty".
- **Rick y Morty API**: Proporciona los datos de los personajes en formato JSON.

## Cómo Funciona 🤖

La aplicación realiza una solicitud `GET` a la API de Rick y Morty al cargar la página, recuperando la lista completa de personajes paginada. Los nombres se presentan en un elemento `<select>`, y al elegir uno, se realiza otra solicitud `GET` para obtener y mostrar los detalles de ese personaje específico.

## Instalación y Ejecución 🔧

Para ejecutar el proyecto localmente:

1. Clone el repositorio en su máquina local.
2. Abra el archivo `index.html` con un navegador web.
3. Disfrute explorando los personajes de Rick y Morty.

## Contribuir 👥

Si desea contribuir al proyecto, por favor considere lo siguiente:

- **Reporte de Errores**: Informe sobre errores o problemas que encuentre. 🐛
- **Sugerencias de Funcionalidades**: Proponga nuevas ideas o mejoras. 💡
- **Código**: Las pull requests son bienvenidas. Para cambios importantes, por favor abra primero un issue para discutir lo que le gustaría cambiar.

- Agradecimientos a los creadores de "Rick y Morty" por inspirar este proyecto.
- A [rickandmortyapi.com](https://rickandmortyapi.com/) por proporcionar una API abierta y bien documentada.
