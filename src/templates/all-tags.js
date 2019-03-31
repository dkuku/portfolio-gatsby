import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { List, Header, Button, Container } from 'semantic-ui-react'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <Layout>
        <Container>
          <Header>All Tags</Header>
          <List>
            {tags.map(tag => {
              return (
                <List.Item>
                  <Link to={`tags/${tag}`}>{tag}</Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      </Layout>
    )
  }
}
export default AllTags
