import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "XRAY/Vault",
    siteUrl: "https://vault.xray.app"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-minify-classnames",
    "gatsby-plugin-react-helmet",
    // "@sentry/gatsby",
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: ["G-4PT68F1D2P"],
    //     gtagConfig: {
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       respectDNT: true,
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "static/favicon.svg"
      }
    }
  ]
}

export default config
