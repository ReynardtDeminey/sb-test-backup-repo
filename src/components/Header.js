import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>Reynardt Deminey</h1>
        </Link>
        <div>
        <h1>
          <Link
              to={
                props.page === 'about'
                  ? "/"
                  : "/about"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'about'
                ? "close"
                : "about"}
            </Link>
          </h1>
          <h1>
         <Link
              to={
                props.page === 'resume'
                  ? "/"
                  : "/resume"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'resume'
                ? "close"
                : "resume"}
            </Link>
            
          </h1>
          <h1>
         <Link
              to={
                props.page === 'projects'
                  ? "/"
                  : "/projects"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'projects'
                ? "close"
                : "projects"}
            </Link>
            
          </h1>
        <h1>
        <Link
              to={
                props.page === 'contact'
                  ? "/"
                  : "/contact"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'contact'
                ? "close"
                : "contact"}
            </Link>
            
          </h1>
          <h1>
            <a href="https://react30-30.netlify.com/">#React3030</a>            
          </h1>
         
          
          {/* <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              // activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1> */}
        </div>
      </nav>
    </header>
  )
}