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
          <li className="logoHeading">Training & Placement Dept.</li>
          <li>
            <div className="dropdown">
               <a href="ww">Why Recruit?</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img>
               <div className="dropdown-content">
                  <a href='#'> Why recruit?</a>
                  <a href='#'>Academics</a>
                  <a href='#'>Demographics</a>
                  <a href='#'>Faculty</a>
                  <a href='#'>Research</a>
                  <a href='#'>Extra-Curriculars</a>
                  <a href='#'>Alumni</a>
               </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
               <a href="ww">For Companies</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img>
               <div className="dropdown-content">
                  <a href='#'> Company Registration</a>
                  <a href='#'>Procedure and Policy</a>
                  <a href='#'>Facilities</a>
                  <a href='#'>Placement Automation System</a>
                  <a href='#'>Internship Automation System</a>
                  <a href='#'>FAQs</a>
               </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
               <a href="ww">For Students</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img>
               <div className="dropdown-content">
                  <a href='#'>Placement Policy</a>
                  <a href='#'>Internship Policy</a>
                  <a href='#'>Placement Automation System</a>
                  <a href='#'>Internship Automation System</a>
                  <a href='#'>Preparation Portal</a>
                  <a href='#'>FAQs</a>
               </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
               <a href="ww">Contact Us</a><img alt="dropDown" src="http://i63.tinypic.com/a10f1c.png"></img>
               <div className="dropdown-content">
                  <a href='#'>Reach DTU</a>
                  <a href='#'>Contacts</a>
               </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar