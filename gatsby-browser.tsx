import "@/styles/style.scss"
import 'aos/dist/aos.css'
import "./src/mockEnv"
import React, { useEffect } from "react"
import { createRoot, hydrateRoot } from 'react-dom/client'
// import { SDKProvider } from "@tma.js/sdk-react"
import type { GatsbyBrowser } from "gatsby"
import ReduxProvider from "./src/redux/provider"
import ThemeProvider from "./src/theme"
import MainLayout from "./src/layout"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return (
    // <SDKProvider>
      <ReduxProvider>
        {/* <ThemeProvider> */}
          {element}
        {/* </ThemeProvider> */}
      </ReduxProvider>
    // </SDKProvider>
  )
}

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return <MainLayout {...props} children={element} />
}

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    createRoot(container).render(element)
  }
}