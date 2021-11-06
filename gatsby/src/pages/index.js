import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="text-6xl mb-4">¡Hola!</h1>
    <p class="text-xl mb-8">Bienvenidos a la práctica de Introducción a Gatsby</p>

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFC%C3%B3mo-proteger-a-tu-gato-y-a-tu-%C3%A1rbol-de-Navidad.jpg"
        // src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg"
        alt="cat"
      />
    </div>

    <Link class="text-xl" to="/other-page/">Ir a ver los eventos</Link><br/>
  </Layout>
)

export default IndexPage
