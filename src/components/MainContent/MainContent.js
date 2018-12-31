import React, { Component } from 'react'
import './MainContent.css'
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
            <li>Placement Brochure</li> 
            <li>Placement Brochure(MBA)</li>
            <li>Training Letter 1st and 2nd year</li>
            <li>Training Letter 3rd year and MBA</li>
            <li>Training Letter B.Tech Evening</li>
            <li>Resume Manager</li>
            <li>Intern Resume Manager</li>
            <li>PC Application Form B.Tech</li>
          </ul>
        </div>
        <div className="about">
          <h1>From the Vice Chancellor's Desk</h1>
          <div className="messageGrid">
            <p className="message">The Delhi Technological University (Erstwhile Delhi College of Engineering) has a glorious past of more than 74 years and has been widely acclaimed for its excellence in education, research and training. A special emphasis is laid on total personality development along with the quality education and technical training of the students. Delhi Technological University is fully networked with industry, as well as with academic/scientific community. It has active collaborations with leading universities and industries in India and abroad. Delhi Technological University is the alma mater of highly distinguished world class engineers and technologists, which include the father of Pentium Chip Vinod Dham, Promod Haque, the world's known venture capitalist, Raj Soin, the avionics wizards of US and a top ranking techno entrepreneur of Ohio, Durgadas Agrawal, the renowned techno-entrepreneur of Houston, to name a few.
            </p>
            <img className="pt5 pl4" src="http://i67.tinypic.com/2004m14.jpg"></img>
          </div>
          <div className="shortMsg pl3 pr2">
            <p className="msg">DTU owes a lot to its alumni for all its international reputation and national standing.</p>
            <p className="msgB"> The students usually come from varied educational and cultural backgrounds </p> 
          </div>
          <p className="pl2"><a className="link" href="ve">Read more</a></p>
        </div>
        <div className="about">
          <h1>Quick Contacts</h1>
          <p>
            <img className="icon pt1" alt="phone" src="http://i68.tinypic.com/21l7olu.png" style={{float:'left'}}></img>
            <span className="pl2">9810530528</span>
          </p>
          <p>
            <img className="icon pt1" alt="e-mail" src="http://i67.tinypic.com/sv6fps.png" style={{float:'left'}}></img>
            <span className="pl2">placements@dtu.ac.in</span>
          </p>
          <p>
            <img className="icon pt1" alt="e-mail" src="http://i64.tinypic.com/qxnslg.png" style={{float:'left'}}></img>
            <span className="pl2">Tnp Building,DTU </span>
          </p>
        </div>
        <div className="about">
          <h1>From the HOD's Desk</h1>
          <div className="messageGrid2">
            <img className="pt5 pl4" src="http://tnp.dtu.ac.in/images/rajesh_sir.jpg"></img>
            <p className="message">Delhi Technological University, has incessantly been acting as a rostrum for providing quality technical education with a mission of developing technocrats having potential to the greatest degree. In congruence with this mission, Delhi Technological University has perpetuated an admirable record for academic contribution towards achieving excellence in building enviable organizations & a stupendous society.
            The programs here have been designed to instil & inculcate spirits of innovation, leadership & team work. Employing of latest technologies for effective delivery & a practice oriented curriculum has been emphasized upon. The graduates & post-graduates of Delhi Technological University, by the virtue of the exposure provided, have gained tremendous technological superiority & a better overall understanding of the world and thus, been recruited in several International Conglomerates along with Indian Corporations. 
            </p>
          </div>
          <p className="pl4"><a className="link pl1" href="ve">Read more</a></p>
        </div>
      </div>
    )
  }
}
