import React, { useEffect } from "react"
import AOS from "aos"
import Index from "@/components/pages/Index"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <>
      <Index />
    </>
  )
}

export default IndexPage
