import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { Helmet } from "react-helmet"
import * as style from "./style.module.scss"

const MainLayout = ({ children, location }: { children: React.ReactNode; location: any }) => {
  return (
    <>
      <Helmet title="XRAY/Vault">
        <meta
          name="viewport"
          content="width=device-width,viewport-fit=cover,initial-scale=1,shrink-to-fit=no,maximum-scale=1,user-scalable=0"
        />
        <link rel="stylesheet" type="text/css" href="/fonts/import.css" />
      </Helmet>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
