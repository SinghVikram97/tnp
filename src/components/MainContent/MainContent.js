import React, { Component } from 'react'
import './MainContact.css'
export default class MainContent extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <div className="about">
          <h1>About us</h1>
          <p>The students of Delhi Technological University have been recruited in several International Conglomerates along with Indian Corporations and have proved to be a great asset to the organizations they joined. Our present graduates would assuredly maintain the same level of performance and take their recruiting organizations to new heights in their respective fields. We highly value our partnership with recruiters, alumni and supporters of Delhi Technological University and remain committed to provide a productive and positive recruiting experience. We heartily invite the recruiting organizations and graduating students to find the best match between their needs and capabilities. We are available for any requisite assistance & would ensure a positive & productive recruiting experience. Feedback & queries would be welcome and thoroughly entertained and suggestions would be appreciated.</p>
        </div>
        <div className="about">
          <h1>Quick Links</h1>
          <ul id="quickLinks">
            <li>Recent Activities</li> 
            <li>Dean, Students' Affairs</li>
            <li>Internship Automation System</li>
            <li>Company Registration</li>
            <li>Placement Automation System</li>
            <li>Preparation Portal</li>
            <li>Career Awareness Workshops</li>
            <li>Meet Our Team</li>
          </ul>
        </div>
      </div>
    )
  }
}
