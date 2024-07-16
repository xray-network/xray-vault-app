import { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@@": path.resolve(__dirname, "static"),
      },
    },
  })
}
