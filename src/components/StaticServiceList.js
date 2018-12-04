import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default (props) => {
  const { serviceType } = props

  return (
    <StaticQuery
      query={graphql`
        query StaticServicesQuery {
          allStoryblokEntry(filter: { full_slug: { regex: "/^services/" } }) {
            edges {
              node {
                name
                full_slug
                slug
              }
            }
          }
        }
      `}
      render={(data) => {
        const list = data.allStoryblokEntry.edges
          .filter(({ node: { full_slug } }) => {
            const service = full_slug.split('/')[1]
            console.log(service)

            return service === serviceType
          })
          .sort()

        return (
          <div>
            <ul css={{ padding: 0, margin: 0 }}>
              {list.map(({ node: { name, full_slug, slug } }) => (
                <li
                  key={name}
                  css={{
                    listStyle: 'none',
                    padding: 0,
                  }}
                >
                  <Link
                    to={`/${slug}`}
                    css={{
                      color: '#fff',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'rgb(44, 255, 0)',
                      },
                    }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }}
    />
  )
}
