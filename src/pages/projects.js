import React from "react"
import Layout from "../components/Layout"
// import infoStyles from "../styles/pages/info.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import ProjectList from "../components/ProjectList"
import reddit from "../images/reddit.png"
import coding3030 from "../images/coding3030.png"

export default function Projects(props) {
  
  return (
    <Layout page="projects" bgColor="#c7d1d9">
      <section>
        <ProjectList name="Coding30-30" description="A personal project where I am aiming to build 30 small projects in a 30 day period." url="https://coding30-30.netlify.com/" src={coding3030}/>
        <ProjectList name="Reddit Search Engine" description="A search engine for reddit built on the the pushshift API. It is built with HTML, CSS and Bootstrap on the front end with Flask calling the API" url="https://github.com/ReynardtDeminey/searchit" src={reddit}/>  

      </section>
    </Layout>
  )
}