import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import "./contact.css"

export default function Contact() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="contact" bgColor="#c7d1d9">
      <br/>
      <br/>
      <h1 className="contact-heading">Please feel free to contact me:</h1>
      <div className="contact-container">
        <p>
          
          <a href="https://github.com/ReynardtDeminey"><i className="fab fa-github social-links"></i></a>
          <a href="https://twitter.com/ReynardtDeminey"><i className="fab fa-twitter social-links"></i></a>
          <a href="https://www.linkedin.com/in/reynardt-deminey-15016789/"><i className="fab fa-linkedin-in social-links"></i></a>
          <a href="mailto:demineydev@outlook.com"><i className="fas fa-envelope-square social-links"></i></a>
          </p>
      </div>
    </Layout>
  )
}