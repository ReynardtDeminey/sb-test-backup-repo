import React from "react"
import Layout from "../components/Layout"
// import infoStyles from "../styles/pages/info.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import ProjectList from "../components/ProjectList"
import image1 from "../images/image1.jpg"

export default function Projects(props) {
  
  return (
    <Layout page="projects" bgColor="#c7d1d9">
      <section>
        <ProjectList name="Reddit Search Engine" description="A search engine built on the the pushshift API" src={image1}/>
        
      </section>
    </Layout>
  )
}