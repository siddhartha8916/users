import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
  return (
    <div className="container-fluid p-0 page">
      <h1 className="error">404</h1>
      <p>Page Not Found</p>
      <center>The page you are looking for doesn't exist or an other error occured
        <br/>
        Go to <Link to='/'>HomePage</Link></center>
    </div>
  )
}

export default Error404
