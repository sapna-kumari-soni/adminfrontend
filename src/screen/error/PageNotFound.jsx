import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go Back to Home</Link>
    </div>
  )
}

export default PageNotFound
