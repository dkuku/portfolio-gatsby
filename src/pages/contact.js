import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MyHeading from '../components/MyHeading'
import ContactForm from '../components/ContactForm'
import { Icon, Header, Button, Grid } from 'semantic-ui-react'

const Contact = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Daniel`,
        `Kukula`,
        `portfolio`,
        `developer`,
        `rails`,
        `react`,
      ]}
    />
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <MyHeading />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" style={{ margin: '1em' }}>
            Send me a message:
          </Header>
          <ContactForm />
          <Header as="h3" style={{ margin: '1em' }}>
            Spy on me:
          </Header>
          <Button.Group>
            <Button
              color="linkedin"
              as="a"
              href="https://www.linkedin.com/in/daniel-kukula-55057a57/"
            >
              <Icon name="linkedin" /> LinkedIn
            </Button>
            <Button color="black" as="a" href="https://github.com/dkuku">
              <Icon name="github" /> Github
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default Contact
