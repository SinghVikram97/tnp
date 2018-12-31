import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer pt4 pb4">
        <div className="about">
          <h1>About</h1>
          <p>Training and Placement Cell of DTU, is the organization which handles all activities related to the campus placement of the graduating batch.</p>
        </div>
        <div className="about">
          <h1>External Links</h1>
          <p className="footerP">
            <a className="footerA" href="">DTU Home Page</a>
            <a className="footerA" href="">Administrators</a>
            <a className="footerA"href="">Student's Portal</a>
            <a className="footerA" href="">Computer Center</a>
            <a className="footerA" href="">Directory</a>
          </p>
        </div>
        <div className="about">
          <h1>Contact Us</h1>
          <p className="footerP">
            Training and Placement Building <br/>
            Delhi Technological University <br/>
            Shahbad, Daulatpur <br/>
            North West Delhi  <br/>
            Delhi 110042(India)
          </p>
        </div>
      </div>
    )
  }
}
