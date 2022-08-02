module.exports = {
  siteMetadata: {
    siteTitle: `Digital Nexus`,
    defaultTitle: `Nexus Wikis`,
    siteTitleShort: `Wikis`,
    siteDescription: `Accelerating CA Digital Transformation with better documentation.`,
    siteUrl: `https://wikis.digitalnexus.app`,
    siteAuthor: `@Aaron_Luhning`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/CADigitalNexus/Wikis`,
        baseDir: `...`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Docs`,
        short_name: `Rocket Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-offline`,
  ],
};
