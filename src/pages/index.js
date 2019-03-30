import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MyHeading from '../components/MyHeading'

const IndexPage = () => (
  <div style={{ background: '#1c1d1e', height: '100%' }}>
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
      <MyHeading frontPage />
    </Layout>
  </div>
)

export default IndexPage
