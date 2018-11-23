import React from 'react';
import "./resume.css";
import { Jumbotron,ListGroup,ListGroupItem,Row,Col,Grid,Media} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

const myResume =(props)=>(
    <div className="resume">

    
        <Jumbotron>
        <ListGroup>
  <ListGroupItem header="My Skills"></ListGroupItem>
  <ListGroupItem >HTML/Bootstrap</ListGroupItem>
  <ListGroupItem>CSS/CSS Grid</ListGroupItem>
  <ListGroupItem>JavaScript</ListGroupItem>
  <ListGroupItem>jQuery</ListGroupItem>
  <ListGroupItem>React</ListGroupItem>
  <ListGroupItem>NODE.JS</ListGroupItem>
  <ListGroupItem>MongoDB</ListGroupItem>
  <ListGroupItem>mySQL</ListGroupItem>
  <ListGroupItem>Tech-savvy</ListGroupItem>
  <ListGroupItem>Supervisor</ListGroupItem>
  <ListGroupItem>Installer/Manual laborer</ListGroupItem>
  <ListGroupItem>Machine Operator</ListGroupItem>
  <ListGroupItem>Customer Service</ListGroupItem>
  <ListGroupItem>Postive Attitude/Quick Leaner</ListGroupItem>
  <ListGroupItem>Multi-lingual(English,Afrikaans,Zulu)</ListGroupItem>
</ListGroup>;
      </Jumbotron>;
  
<div>
  <Media>
    <Media.Left align="top">
      {/* <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" /> */}
    </Media.Left>
    <Media.Body>
      <Media.Heading>EDUCATION</Media.Heading>
      <p>
        <h4>
          Case Wastern Reserve Unversity (Coding Boot Camp)<span>October 2018</span>
          <br/>
                <span> Certification Full Stack Web Developer
 </span>
        </h4>
        <h5>
       Maplewood Vacational Center<span>June 2016</span>-GED</h5>
      </p>
    </Media.Body>
  </Media>
  <Media>
    <Media.Left align="bottom">
     
    </Media.Left>
    <Media.Body>
      <Media.Heading>EMPLOYMENT</Media.Heading>
      <p>
        <h4> 
          Ramco Speicalties Inc. |5445 Husdon Industrial Parkway,Hudson OH 44236</h4>
          <h6> <em>Machine Operator/Material Handler -September 2015-present</em></h6>
          <h5><strong>JOB RESPONSIBLITIES</strong></h5>
        <p>Operate machinery, attend to machine malfunctions, sorting product, fork-lift driving,<br/>
        administrative paperwork and documentation of product. Applied best practices of software development while staying abreast of advances in the practice.<br/>
        Worked with product designers and product managers to design user interactions in applications.<br/>
        Conducted computer diagnostics to investigate and resolve problems and provide<br/>
        technical assistance and support. </p>
      </p>
    </Media.Body>
    <Media.Body>
      <p>
        <h4> 
         Pro-Model & Talent Management | 3421 Ridgewood Rd,Fairlawn, Ohio 44333</h4>
          <h6> <em>Promtional Worker/Model -December 2014 -September 2015</em></h6>
          <h5><strong>JOB RESPONSIBLITIES</strong></h5>
        <p>Team-lead/anchor recruiter.Set and achieve team goals. Self-motivated worker. </p>
      </p>
    </Media.Body>
    <Media.Body>
      <p>
        <h4> 
         Blind Rage & Curtains | 14th Ave , Northmead ,Benoni, Gauteng, South Africa</h4>
          <h6> <em>Installer/Team Leader/Field Supervisor May 2009-December 2014</em></h6>
          <h5><strong>JOB RESPONSIBLITIES</strong></h5>
        <p>Installation supervisor, programmed motorized blinds, managed custom oeders and <br/>
        sopplies, transported materials on and off-site, customer interaction, setup exhibitions - <br/>
        i.e. Decorex and Homemakers, etc, traveled internationally for businwss purposes and training.</p>
      </p>
    </Media.Body>
  </Media>
</div>;
</div> 
)
export default myResume;