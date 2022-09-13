import React from "react"
import { WIP_CONTAINER } from "./styles/WIP_CONTAINER"
import { Link } from "react-router-dom"

const WorkInProgress = ({ whichPage }) => {
  return (
    <WIP_CONTAINER>
      <div>
        <p>Work in progress</p>
        <Link to="/">Click here to return to Home</Link>
      </div>
    </WIP_CONTAINER>
  )
}

export default WorkInProgress
