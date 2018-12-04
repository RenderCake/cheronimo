module.exports = {
  siteMetadata: {
    title: 'Cheronimo',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/components/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'nZeT7oEnC2oopOI3iaeBpwtt',
        homeSlug: 'home',
        version: 'draft',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
