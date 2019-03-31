import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { List, Header, Button, Container } from 'semantic-ui-react'

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <Container>
          <Header>Posts about {tagName}</Header>

          <List>
            {posts.map(post => {
              return (
                <List.Item>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      </Layout>
    )
  }
}

export default Tags
