import React from 'react';
import "./projects.css";
import { Jumbotron,Grid,Row,Thumbnail,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Project1Food from '../../assets/images/foodD1.jpg';
import ProjectLODI from '../../assets/images/home.jpg';
import ProjectBubble from '../../assets/images/BubblinkLogo.png';

const myProject =(props)=>(
    <div className="project">

    
        <Jumbotron className="ProjectJumbotron">
        <h1 class="ProjectHeadline">Portfolio and Projects</h1>
        <p>
         These are a few of the projects I have worked on .
         <br/>
         I did the Coding Boot Camp,where we have and indiviual project every week and 3 group project. 
        </p>
      </Jumbotron>;
      <Grid>
  <Row>
    <Col xs={6} md={4}>
    <h2>Group Project 1</h2>
      <Thumbnail src={Project1Food} alt="Projet Food Desert">
        <h5>Projet Food Desert</h5>
        <p>We built this to help people locate areas that dont have a grocery store near them.</p>
        <h6>My Role</h6>
        <p>Front End</p>
        <p>
          <Button bsStyle="primary" href="https://bradleyhersey.github.io/ProjetFoodDesert/" target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/ProjetFoodDesert'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2>Group Project 3</h2>
      <Thumbnail src={ProjectLODI} alt="LODI(Let Others Do It)<">
        <h5>LODI(Let Others Do It)</h5>
        <p>LODI is an app used for local home contractors.<br/> A contractor can add information to the database. A customer can add reviews for a contractor. When a review is added, the contractor's overall average rating is updated. </p>
        <h6>My Role</h6>
        <p>Front End</p>       
        <p>
          <Button bsStyle="primary" href='https://projectlodi.herokuapp.com/' target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/Project2lodi/'target='blank'>GitHub</Button>        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2>Group Project 3</h2>
      <Thumbnail src={ProjectBubble} alt="Bubblink">
        <h5>Bubblink</h5>
        <p>We bilt a virtual chat room ,you sign up,log in and chat in a big group chat.<br/>
        If you want to go private you can. </p>
        <h6>My Role</h6>
        <p>Front End</p>
        <p>
        <Button bsStyle="primary" href='(https://bubblink.herokuapp.com'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/Project3Bubblink/'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>;
    </Col>
  </Row>
</Grid>
  

</div> 
)
export default myProject;