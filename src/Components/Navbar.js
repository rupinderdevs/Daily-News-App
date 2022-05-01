import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
//    static propTypes = {}

  render() {
    return (
      <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Daily News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link"href="/">About</a>
        <a className="nav-link" href="/">News Section</a>
        
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar