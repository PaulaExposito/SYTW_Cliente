import React from "react"

import Event from "../components/event"
import SEO from "../components/seo"
import Layout from "../components/layout"

const PracticePage = () => (
    <Layout class="text-center w-full">
        <div class="container w-full text-center mb-8"><br/><h1 class="w-full text-5xl">Eventos</h1></div>
        <SEO title="Práctica Gatsby" />
        <Event eventName="Nochebuena" date="24/12/2021" image="https://cde.laprensa.e3.pe/ima/0/0/2/3/7/237172/691x430.jpg"></Event>
        <Event eventName="Navidad" date="25/12/2021" image="https://www.maquinasfebal.es/wp-content/uploads/2020/12/8-consejos-para-no-sobrepasarte-con-la-comida-en-navidad.jpg"></Event>
        <Event></Event>
        <Event eventName="Reyes Magos" date="06/01/2022" image="https://cloud10.todocoleccion.online/playmobil/tc/2014/10/09/21/45632098.jpg"></Event>
    </Layout>
)

export default PracticePage