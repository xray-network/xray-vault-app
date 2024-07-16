import React from "react"
import classnames from "classnames"
import * as style from "./style.module.scss"

const Index = ({
  prefix,
  name,
  size = 1.3,
  color = "mono",
  hideIcon,
  hideLine,
}: {
  prefix: string
  name: string
  size?: number
  color?: "blue" | "white" | "dark" | "mono"
  hideIcon?: boolean
  hideLine?: boolean
}) => {
  return (
    <div className={style.logo} style={{ fontSize: `${size}em` }}>
      {!hideIcon && (
        <svg
          className={classnames(style.icon, {
            [style.iconBlue]: color === "blue",
            [style.iconWhite]: color === "white",
            [style.iconDark]: color === "dark",
            [style.iconMono]: color === "mono",
          })}
          viewBox="0 0 340 340"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect fill="#1940ED" x="0" y="0" width="340" height="340" rx="60" />
            <polygon
              fill="#FFFFFF"
              transform="translate(170.439145, 169.589833) scale(-1, 1) translate(-170.439145, -169.589833) "
              points="70 90 124.509687 90 270.878291 249.179666 216.368604 249.179666"
            />
            <polygon fill="#FFFFFF" points="70 90 124.509687 90 270.878291 249.179666 216.368604 249.179666" />
          </g>
        </svg>
      )}
      {prefix && <span className={style.prefix}>{prefix}</span>}
      {!hideLine && (
        <svg className={style.line} viewBox="0 0 40 67" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
            <g id="Artboard" transform="translate(-465.000000, -195.000000)" stroke="#C6C9D5" strokeWidth="2.66">
              <line x1="503" y1="197" x2="467" y2="260" />
            </g>
          </g>
        </svg>
      )}
      {name && <span className={style.name}>{name}</span>}
    </div>
  )
}

export default Index
