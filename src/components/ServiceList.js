import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default (props) => {
  const { services } = props.blok

  return (
    <StaticQuery
      query={graphql`
        query ServicesQuery {
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

            return service === services
          })
          .sort()

        return (
          <div>
            <ul>
              {list.map(({ node: { name, full_slug, slug } }) => (
                <li
                  key={name}
                  css={{
                    padding: '.5rem 1rem',
                    background: '#7A7A7A',
                    color: '#fff',
                    fontWeight: '600',
                    margin: '1rem',
                    borderRadius: '8px',
                    border: '4px solid #000',
                    textAlign: 'center',
                  }}
                >
                  <Link to={`/${slug}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }}
    />
  )
}
