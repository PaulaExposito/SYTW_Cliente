import React from "react"

import Event from "../components/event"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const EventsPage = () => (
    <Layout className="text-center w-full">
        <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}></div>
        <div className="container w-full text-center mb-8"><br/>
            <h1 tabIndex="0" aria-level="1" className="w-full text-5xl">Eventos</h1>
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