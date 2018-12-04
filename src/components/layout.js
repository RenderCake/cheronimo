import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Nav from './Nav'

const navItems = [
  {
    label: 'hello',
    subNav: null,
  },
  {
    label: 'foo',
    subNav: null,
  },
  {
    label: 'bar',
    subNav: null,
  },
  {
    label: 'baz',
    subNav: [
      {
        label: 'hello',
        subNav: null,
      },
      {
        label: 'foo',
        subNav: null,
      },
      {
        label: 'bar',
        subNav: [
          {
            label: '3rd',
            subNav: null,
          },
          {
            label: 'level',
            subNav: null,
          },
        ],
      },
    ],
  },
]
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
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          />
        </Helmet>
        <Nav navItems={navItems} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
