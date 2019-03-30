import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
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
        <div className="site">
          <div className="site-content">
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
