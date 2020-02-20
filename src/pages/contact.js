import React from "react"
import Layout from "../components/Layout"
import "./contact.css"
import github from "../images/github.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import mail from "../images/mail.png"

export default function Contact() {
  return (
    <Layout page="contact" bgColor="#c7d1d9">
      <br/>
      <br/>
      <h1 className="contact-heading">Please feel free to contact me:</h1>
      <div className="contact-container">
        <p>
          
          <a href="https://github.com/ReynardtDeminey"><img className="social-links" src={github} alt="" /></a>
          <a href="https://twitter.com/ReynardtDeminey"><img className="social-links" src={twitter} alt="" /></a>
          <a href="https://www.linkedin.com/in/reynardt-deminey-15016789/"><img className="social-links" src={linkedin} alt="" /></a>
          <a href="mailto:info@reynardtdeminey.me"><img className="social-links" src={mail} alt="" /></a>
          </p>
      </div>
    </Layout>
  )
}