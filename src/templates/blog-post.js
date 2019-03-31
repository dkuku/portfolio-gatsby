import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Icon, Header, Button, Container } from 'semantic-ui-react'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <Layout>
      <Helmet title={`${title} - My Blog`} />
      <Container>
        <Header>{title}</Header>
        <Header as="h3">{date}</Header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </p>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
