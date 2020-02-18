import React from "react"
import Layout from "../components/Layout"
// import infoStyles from "../styles/pages/info.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import ProjectList from "../components/ProjectList"

export default function Projects(props) {
  
  return (
    <Layout page="projects" bgColor="#c7d1d9">
      <section>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API"/>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API"/>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API"/>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API"/>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API"/>
      </section>
    </Layout>
  )
}