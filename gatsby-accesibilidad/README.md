# Práctica 3: Accesibilidad con Gatsby + GraphQL

Esta práctica consiste en crear un componente accesible con Gatsby que recibe información de un evento a través de una API GraphQL. 


## Uso

Para ejecutar esta aplicación en local se tiene que ejecutar:

```
npm install
npm run develop
```

También puede accederse a la versión desplegada en GitHub Pages [aquí](https://paulaexposito.github.io/SYTW_Cliente/gatsby-accesibilidad/).


## Realización de la práctica

Esta práctica utilizaba algunos de los conceptos utilizados en las prácticas y ejercicios anteriores como la creación de componentes (práctica 2: web components) y la utilización de Gatsby (ejercicio de introducción a Gatbsy). 

El contenido que se incluye como nuevo son:

* La utilización de GraphQL para la obtención de los datos.

* La accesibilidad del sitio

En las siguientes secciones se explican con más detalle.


### GraphQL

La parte de GraphQL puede dividirse en dos tareas:

1. **Almacenamiento de los datos**

En primer lugar almacené los datos en local, en las prácticas anteriores los cogía de una API pública en la nube. Este cambio se debió a que la página que se utilizaba antes (JSONStub) para "falsear" el uso de un backend no permitía realizar peticiones desde la página públicada en GitHub Pages, ya que realizaba peticiones HTTP.

Los datos se encuentran en un fichero JSON en [content](./content) que contienen lo siguiente:

```json
[
  {
    "name": "Nochebuena",
    "date": "24/12/2021",
    "description": "HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo HoHoHo ",
    "image": "https://cde.laprensa.e3.pe/ima/0/0/2/3/7/237172/691x430.jpg"
  },
  {
    "name": "Navidad",
    "date": "25/12/2021",
    "image": "https://www.maquinasfebal.es/wp-content/uploads/2020/12/8-consejos-para-no-sobrepasarte-con-la-comida-en-navidad.jpg"
  },
  {
    "name": "Reyes Magos",
    "date": "06/01/2022",
    "image": "https://cloud10.todocoleccion.online/playmobil/tc/2014/10/09/21/45632098.jpg"
  }
]
```

2. **Acceso a los datos**

Una vez los datos estuvieron preparados quedaba la parte más importante, acceder a ellos desde la aplicación cliente. Para ello opté por utilizar el componente de Gatsby ```StaticQuery```. De forma que este componente lanzaba la consulta a la API y a partir de los resultados crea un componente ```Event``` para cada evento.

**Petición**

```javascript
<StaticQuery 
    tabIndex="0"
    query = { graphql`
        query EventsQuery {
            allDataJson {
                edges {
                    node {
                        name
                        date
                        description
                        image
                    }
                }
            }
        }
    ` 
    }

    render = { data => (
        <ul> { getEvents(data) } </ul>
    )
    }
/>
```

**Creación de componentes Evento**

```javascript
function getEvents(data) {
    const eventItemsArray = [];
    data.allDataJson.edges.forEach(item =>
        eventItemsArray.push(<Event tabIndex="0"
                                key={item.node.name}
                                eventName={item.node.name}
                                date={item.node.date}
                                description={item.node.description}
                                image={item.node.image}
                             >
                             </Event>
        )
    );
    return eventItemsArray;
}
```

### Accesibilidad del sitio

Por otra parte se llevó a cabo la accesibilidad del sitio, la cual se probó haciendo uso del lector de pantalla ```ChromeVox```, que es una extensión de Google Chrome. La verdad es que esta parte de la práctica se me complicó un poco debido a problemas con el linter, así que finalmente se optó por hacer accesibles ignorar un poco las recomendaciones del linter y hacer los componentes accesibles a mano.

Principalmente tuve que añadir a los elementos atributos como ```tabindex```, ```role```, ```alt``` y ```aria-label```. A continuación incluyo un ejemplo:

```javascript
<h1 aria-level="1" className="text-6xl mb-4" tabIndex="0">¡Feliz Navidad!</h1>
<p role="contentinfo" className="text-xl mb-8" tabIndex="0">Bienvenidos a la práctica de Accesibilidad de Gatsby</p>
```


## Referencias

[Reading Data From A JSON File With Gatsby + GraphQL](https://itnext.io/reading-data-from-a-json-file-with-gatsby-graphql-572b18ab98a)

[Plugin eslint-plugin-jsx-a11y](https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/?=eslint-plugin-jsx-a11y)