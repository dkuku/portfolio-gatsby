import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Icon, Header, Button, Grid } from 'semantic-ui-react'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post
        return (
          <div>
            <Header>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </Header>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
