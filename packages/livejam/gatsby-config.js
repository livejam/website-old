module.exports = {
  siteMetadata: {
    title: `LiveJam.io`,
    description: `Join fellow tech makers for live jam session on Twitch, Youtube and other channels. Interact in real time, explore new topics and watch how others would troubleshoot a problem..`,
    author: `Mike und Sebastian`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-modular-graphql",
      options: {
        path: "./graphql",
        schemaModules: ["events", "users"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphql`,
        path: `${__dirname}/graphql`
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: { main: "#ec5331" },
            secondary: { main: "#31caec" }
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400,500,700", "Material+Icons"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.BucketName || "stub-for-gatsby-build",
        protocol: "https",
        hostname: "www.livejam.io",
        params: {}
      }
    }
  ]
};
