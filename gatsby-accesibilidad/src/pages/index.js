import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 role="contentinfo" className="text-6xl mb-4">¡Feliz Navidad!</h1>
    <p aria-label="bienvenida" role="contentinfo" className="text-xl mb-8">Bienvenidos a la práctica de Accesibilidad de Gatsby</p>

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <StaticImage
        tabIndex="0"
        alt="Gatos navideños"
        src="https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFC%C3%B3mo-proteger-a-tu-gato-y-a-tu-%C3%A1rbol-de-Navidad.jpg"
      />
    </div>


    <Link className="text-xl" to="/events">Ver los eventos programados</Link><br/>
  </Layout>
)

export default IndexPage
