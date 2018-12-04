const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/components/StoryblokEntry.js')

    graphql(
      `
        {
          allStoryblokEntry(filter: { full_slug: { regex: "/^services/" } }) {
            edges {
              node {
                id
                name
                uuid
                slug
                full_slug
              }
            }
          }
        }
      `,
    ).then((result) => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const globalSettings = result.data.allStoryblokEntry.edges
      resolve(
        graphql(
          `
            {
              allStoryblokEntry {
                edges {
                  node {
                    id
                    name
                    created_at
                    uuid
                    slug
                    full_slug
                    content
                    is_startpage
                    parent_id
                    group_id
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const entries = result.data.allStoryblokEntry.edges
          entries.forEach((entry, index) => {
            const pagePath = entry.node.slug === 'home' ? '' : `${entry.node.slug}/`
            createPage({
              path: `/${pagePath}/`,
              component: storyblokEntry,
              context: {
                globalSettings,
                story: entry.node,
              },
            })
          })
        }),
      )
    })
  })
}
