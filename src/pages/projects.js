import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, Container } from 'semantic-ui-react'
import Project from '../components/Project'
import { projects } from '../components/constants'

const Projects = () => (
  <Layout>
    <SEO title="Home" keywords={
      [`Daniel`, `Kukula`, `portfolio`,
      `developer`, `rails`,  `react`
      ]} />
    <Container style={{ marginBottom: '1em' }}>
        <Card.Group>
            {projects.map((r, index) => {
                return (
                    <Project key={index} num={index} {...r} />
                )
            })}
        </Card.Group>
    </Container>
  </Layout>
)

export default Projects