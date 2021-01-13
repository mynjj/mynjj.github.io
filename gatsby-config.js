module.exports = {
  siteMetadata: {
    title: `Joshua Martínez`,
    description: `Portfolio website for Diego Joshua Martínez Pineda. Software Developer based in Copenhagen. Student of Msc. in Computer Science at ITU. Experienced in JS, React, Vue.js, Node.js, Express, PHP, Symfony, Laravel. With knowledge of Python, Java, C.`,
    author: `Diego Joshua Martínez Pineda`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    }
    */
    /*
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    */
  ],
}
