import React from "react"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"



export default function BlogList(props) {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (              
                <li className={blogListStyles.li}>
                  <div className={blogListStyles.list__hero}>
                    <a href={props.url}>
                    <img 
                      className="project-image"
                      src={
                        props.src
                      }
                      alt={blog.node.frontmatter.title}                      
                    />
                    </a>
                    </div>
                  <div className={blogListStyles.list__info}>
                    <h2><a href={props.url}>{props.name}</a></h2>
                    <p>{props.description}</p>
                  </div>
                </li>              
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

