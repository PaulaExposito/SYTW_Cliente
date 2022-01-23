import React from "react"

import Event from "../components/event"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

const EventsPage = () => (
    <Layout tabIndex="0" className="text-center w-full">
            <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <StaticImage
        tabIndex="0"
        alt="Gatos navideños"
        src="https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFC%C3%B3mo-proteger-a-tu-gato-y-a-tu-%C3%A1rbol-de-Navidad.jpg"
      />
    </div>
        <div className="container w-full text-center mb-8"><br/>
            <h1 className="w-full text-5xl">Eventos</h1>
        </div>
        <SEO title="Práctica Gatsby" />
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
    </Layout>
//     <Layout>
//     <h1 role="contentinfo" className="text-6xl mb-4">¡Feliz Navidad!</h1>
//     <p aria-label="bienvenida" role="contentinfo" className="text-xl mb-8">Bienvenidos a la práctica de Accesibilidad de Gatsby</p>

//     <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
//       <StaticImage
//         tabIndex="0"
//         alt="Gatos navideños"
//         src="https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFC%C3%B3mo-proteger-a-tu-gato-y-a-tu-%C3%A1rbol-de-Navidad.jpg"
//       />
//     </div>


//     <Link className="text-xl" to="/events">Ver los eventos programados</Link><br/>
//   </Layout>
)

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

export default EventsPage