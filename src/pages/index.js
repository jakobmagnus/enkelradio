import React from "react"
import P1 from "../components/P1"
import P2 from "../components/P2"
import P3 from "../components/P3"
import P4 from "../components/P4"
import "../components/layout.css"

const IndexPage = () => (
  typeof window !== 'undefined' &&
  <div className="PlayerGroup">
    <P1 />
    <P2 />
    <P3 />
    <P4 />
  </div>
)

export default IndexPage