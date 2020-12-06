import React from "react"
import { Link } from "gatsby"
import usgs from "@streamster/usgs"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    async function getData() {
      try {
        const data = await usgs.daily().getDailyData({
          format: "raw",
          queryParameters: {
            sites: "09361500",
            siteStatus: "active",
            parameterCd: "00060",
            startDT: "2019-10-02",
            endDT: "2019-10-10",
          },
        })
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
