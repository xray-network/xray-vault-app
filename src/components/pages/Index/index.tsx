import React, { useEffect } from "react"
import classnames from "classnames"
import Logo from "@/components/common/Logo"
import { AppActions } from "@/redux/app"
import { useAppDispatch, useAppSelector } from "@/redux/provider"
import * as style from "./style.module.scss"

const Index = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.app.theme)

  const switchTheme = () => {
    dispatch(AppActions.THEME_UPDATE_SAGA(theme === "default" ? "dark" : "default"))
  }

  useEffect(() => {
    if (global.window) {
      document?.querySelector("body")?.addEventListener("click", switchTheme)
    }
    return () => {
      document?.querySelector("body")?.removeEventListener("click", switchTheme)
    }
  }, [theme])

  return (
    <div className={style.index}>
      <Logo size={1.2} hideIcon color="mono" prefix="XRAY" name="Vault" />
    </div>
  )
}

export default Index
