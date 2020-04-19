import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const index = ({location}) => {
  return (
    <Layout
      location={location}
      title={"Home Page"}
    >
      <Link to={"/blog"}>Blog</Link>
    </Layout>
  )
}

export default index;
