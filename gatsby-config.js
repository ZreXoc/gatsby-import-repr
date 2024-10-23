/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `bug+repr`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        '@components': path.join(__dirname, "src", "components"),
      },
    },
  ],
}
