import React from "react"
import Layout from "../components/Layout"
import "./about.css" 
import Profilephoto2 from "../images/Profilephoto2.jpg"

export default function About() {
 return (
    <Layout page="about" bgColor="#c7d1d9">
      <section className="about-section">
      <div>
        <div className="profile-picture-container"><img className="profile-picture" src={Profilephoto2} alt=""/></div>
        <h1 className="header">Reynardt Deminey</h1>
        <div className="sub-heading">Midstream Estate · Gauteng · South Africa · <a href="mailto:demineydev@outlook.com">demineydev@outlook.com</a></div>
        <br/>
        <div className="blurb">
          <p>
            I am an energetic and hardworking Full Stack Developer who, after 13 years as legal professional discovered something I truly love to do. After discovering my passion for web and software development, I couldn’t get enough. I learned as much as I could, built projects for myself and hired myself out as a freelancer. I’m looking forward to bringing that passion to a full-time role.
            I would love to work on exciting projects that use HTML, CSS, Javascript, Python, Node.js, and any of the popular frontend frameworks, but I am also eager to learn new technologies and languages.
          </p>
        </div>
          </div>
      </section>
    </Layout>
  )
}