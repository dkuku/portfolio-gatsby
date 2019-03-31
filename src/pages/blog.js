import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Segment, Header, List, Container, Divider } from 'semantic-ui-react'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Container>
        <Header>Blog</Header>
        {posts.map(({ node: post }) => {
          const { frontmatter } = post
          return (
            <Segment>
              <Header as="h3">
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </Header>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
              <Divider horizontal>TAGS</Divider>
              <List relaxed horizontal>
                {post.frontmatter.tags.map(tag => {
                  return (
                    <List.Item>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </List.Item>
                  )
                })}
              </List>
            </Segment>
          )
        })}
      </Container>
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
