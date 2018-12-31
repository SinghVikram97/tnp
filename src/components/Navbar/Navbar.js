import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="zone sticky">
        <div id="collegeName">
          Delhi Technological University
        </div>
        <ul className="main-nav">
          <li class="img">
            <img alt="logo"src="http://i65.tinypic.com/2rzys0x.png">
            </img>
          </li>
          <li class="logoHeading">Students Placement Office</li>
          <li><a href="ww">Why Recruit?</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img></li>
          <li><a href="ww">For Companies</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img></li>
          <li><a href="ww">For Students</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img></li>
          <li><a href="ww">Contact</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar