import React from "react"
import { Link } from "react-router-dom"

import NotFoundContainer from "./styles/NotFoundContainer.js"

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>
        <p>Page not found</p> <Link to="/">Click here to return to Home</Link>{" "}
      </div>
    </NotFoundContainer>
  )
}

export default NotFound
