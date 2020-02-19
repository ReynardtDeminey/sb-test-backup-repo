import React from "react"
import Layout from "../components/Layout"
import "./resume.css"
import python from "../images/python.png"
import html5 from "../images/html5.png"
import css from "../images/css.png"
import react from "../images/react.png"
import javascript from "../images/javascript.png"

export default function Resume() {
  return (
    <Layout page="resume" bgColor="#c7d1d9">
      <section className="resume-section">
        <div><h2>Experience</h2></div>
        <div><h3>Freelance Web Developer</h3></div>
        <div><p>April 2018 - Present</p></div>
        <div><p>Self Employed</p></div>
        <div><p>Freelance web development work where I apply my skills in HTML, CSS, and Javascript. I am proficient in Python and eager to work more with any of the popular front end frameworks. As freelancer I have done work for tutoringacademy.ca and silentpartnersoftware.com.</p></div>
        <div><h3>Advocate</h3></div>
        <div><p>January 2005 - December 2017</p></div>
        <div><p>Self Employed</p></div>
        <div><p>Legal Practitioner in private practice in Pretoria, South Africa specializing in commercial law and contractual matters. My practice comprises advising clients in respect of contractual and commercial matters including, labour, insurance, credit, consumer protection and other disputes. My work also includes research and the drafting of various legal documents including contracts and opinions.</p></div>
      </section>
    <hr/>
    <section className="resume-section">
      <div><h2>Education</h2></div>
      <div><h3>FreeCodeCamp</h3></div>
      <div><p>Full Stack Developer Certification</p></div>
      <div><p>In progress and I have completed the Responsive Web Design and JavaScript Algorithms certifications.</p></div>
      <div><p>2018 - Current</p></div>
      <div><h3>University of Pretoria</h3></div>
      <div><p>Bachelor of Laws</p></div>
      <div><p>I completed the Bachelor of Laws Degree at the University of Pretoria</p></div>
      <div><p>January 2001 - December 2004</p></div>  
    </section>
    <hr/>
    <section className="resume-section">
      <div>
        <h2>Skills</h2>
        <h3>Programming Languages &amp; Tools</h3>
        <p>
          <img className="resume-icons" src={python} alt="" />
          <img className="resume-icons" src={html5} alt="" />
          <img className="resume-icons" src={css} alt="" />
          <img className="resume-icons" src={javascript} alt="" />
          <img className="resume-icons" src={react} alt="" />
          <img/>
        </p>
        <h3>Specific skills</h3>
        <p><i className="fa-li fa fa-check"></i> Responsive Design with HTML, CSS, Javascript and Bootstrap</p>
        <p><i className="fa-li fa fa-check"></i>  Development with Python including web development with Flask, Web API's and scraping</p>
        <p><i className="fa-li fa fa-check"></i>  Working on remote teams with platforms such as Slack</p>
        <div></div>
        <ul class="fa-ul mb-0">
          <li>
            
            </li>
          <li>
            
           
            </li>
          <li>
            
           </li>
          
        </ul>
      </div>
    </section>

    <hr class="m-0" />
    <br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
   

    </Layout>
  )
}