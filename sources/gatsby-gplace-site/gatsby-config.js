/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const proxy = require("http-proxy-middleware")

const crafterURL = process.env.CRAFTER_URL || "http://localhost:8080"

module.exports = {
  /* Your site config here */
  developMiddleware: app => {
    app.use("/static-assets", proxy({ target: crafterURL }))
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "cms",
        fieldName: "CrafterCMS",
        url: `${crafterURL}/api/1/site/graphql?crafterSite=gplace`,
        refetchInterval: 3,
      },
    },
  ],
}
