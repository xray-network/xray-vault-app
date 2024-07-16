import "@/styles/style.scss"
import React from "react"
import { SDKProvider } from "@tma.js/sdk-react"
import { Helmet } from "react-helmet"
import { renderToString } from "react-dom/server"
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type { GatsbySSR } from "gatsby"
import ReduxProvider from "./src/redux/provider"
import MainLayout from "./src/layout"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  // TODO: Static extract style hack - https://github.com/ant-design/ant-design/discussions/40985
  const antStyleCache = createCache()
  renderToString(
    // <SDKProvider>
      <ReduxProvider>
        <StyleProvider cache={antStyleCache}>
          {element}
        </StyleProvider>
      </ReduxProvider>
    // </SDKProvider>
  )
  const antStyleCacheExtracted = extractStyle(antStyleCache)

  return (
    // <SDKProvider>
      <ReduxProvider>
        <Helmet style={[{ cssText: antStyleCacheExtracted }]} />
        {element}
      </ReduxProvider>
    // </SDKProvider>
  )
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <MainLayout {...props} children={element} />
}

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  // TODO: move global styles to the end of HEAD trick
  const headComponents = getHeadComponents();
  const GlobalStyleEl = headComponents.filter((item: any) => item?.props?.['data-identity'] === 'gatsby-global-css')
  const GlobalStyleIndex = headComponents.indexOf(GlobalStyleEl[0])
  headComponents.push(headComponents.splice(GlobalStyleIndex, 1)[0])
  replaceHeadComponents(headComponents)
}

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ "data-theme": "default", "lang": "en" })
}