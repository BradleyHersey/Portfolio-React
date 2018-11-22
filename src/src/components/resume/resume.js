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
  
      <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>{'<Col xs={12} md={8} />'};</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xsHidden md={4}>
      <code>{'<Col xsHidden md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>{'<Col xs={6} xsOffset={6} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>{'<Col md={6} mdPush={6} />'}</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>{'<Col md={6} mdPull={6} />'}</code>
    </Col>
  </Row>
</Grid>;
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
          Ramco Speicalties Inc. |5445 Husdon Industrial Parkway,Hudson OH 44236
          <h6> Machine Operator/Material Handler -September 2015-present</h6>
          <h5><strong>JOB RESPONISI</strong></h5>
        </h4>
      </p>
    </Media.Body>
  </Media>
</div>;
</div> 
)
export default myResume;