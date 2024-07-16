import React, { useEffect, useState } from "react"
import { ConfigProvider, theme } from "antd"
import { useAppSelector } from "@/redux/provider"

const defaultTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1940ed",
    fontFamily: '"Satoshi", sans-serif',
  },
}

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#4c82fb",
    fontFamily: '"Satoshi", sans-serif',
  },
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const settingsTheme = useAppSelector((state) => state.app.theme)
  const [palette, setPalette] = useState(defaultTheme)

  useEffect(() => {
    setPalette(settingsTheme === "default" ? defaultTheme : darkTheme)
  }, [settingsTheme])

  return <ConfigProvider theme={palette}>{children}</ConfigProvider>
}

export default ThemeProvider
