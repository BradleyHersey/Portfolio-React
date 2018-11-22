import React from 'react';
import "./projects.css";
import { Jumbotron,Grid,Row,Thumbnail,Col,Carousel} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Project1Food from '../../assets/images/foodD1.jpg';
import ProjectLODI from '../../assets/images/home.jpg';
import ProjectBubble from '../../assets/images/BubblinkLogo.png';
import ProjectCrystal from '../../assets/images/crystalgame.jpg';
import ProjectHangman from '../../assets/images/midevilcaptainamerica.jpg';
import ProjectWorldTrivia from'../../assets/images/trivia.jpg';
import ProjectBamazon from'../../assets/images/bamazonp.jpg';
import ProjectTrain from '../../assets/images/train2.jpg';
import ProjectFriendFinder from '../../assets/images/friendfinder.jpg';

const myProject =(props)=>(
    <div className="project">

    
        <Jumbotron className="ProjectJumbotron">
        <h1 class="ProjectHeadline">Portfolio and Projects</h1>
        <p><strong>
         These are a few of the projects I have worked on .
         <br/>
         I did the Coding Boot Camp,where we have and indiviual project every week and 3 group project. 
       </strong> </p>
      </Jumbotron>;
      <Grid>
  <Row>
    <Col xs={6} md={4}>
    <h2 className='ProjectTitle'>Group Project 1</h2>
      <Thumbnail src={Project1Food} alt="Projet Food Desert">
        <h5 className='ProjectH5'>Projet Food Desert</h5>
        <p className='ProjectP'>We built this to help people locate areas that dont have a grocery store near them.</p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>
        <p className='ProjectButtons'>
          <Button bsStyle="primary" href="https://bradleyhersey.github.io/ProjetFoodDesert/" target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/ProjetFoodDesert'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>Group Project 2</h2>
      <Thumbnail src={ProjectLODI} alt="LODI(Let Others Do It)<">
        <h5 className='ProjectH5'>LODI(Let Others Do It)</h5>
        <p className='ProjectP'>LODI is an app used for local home contractors.<br/> A contractor can add information to the database. A customer can add reviews for a contractor. When a review is added, the contractor's overall average rating is updated. </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>       
        <p className='ProjectButtons'>
          <Button bsStyle="primary" href='https://projectlodi.herokuapp.com/' target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/Project2lodi/'target='blank'>GitHub</Button>        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>Group Project 3</h2>
      <Thumbnail src={ProjectBubble} alt="Bubblink">
        <h5 className='ProjectH5'>Bubblink</h5>
        <p className='ProjectP'>We built a virtual chat room ,you sign up,log in and chat in a big group chat.<br/>
        If you want to go private you can. </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>
        <p className='ProjectButtons'>
        <Button bsStyle="primary" href='https://bubblink.herokuapp.com'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/Project3Bubblink/'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>;
    </Col>
  </Row>
</Grid>
<hr/>
<Grid>
  <Row>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 1</h2>
      <Thumbnail className='ProjectImage' src={ProjectCrystal} alt="Crystal Game">
        <h5 className='ProjectH5'>Projet Food Desert</h5>
        <p className='ProjectP'>This is by far my favorite game I've ever made .Its sample. It makes a random number and you have four crystals,each crystal has a value you cant see the value till you click it . <br/>
        You need to match the number I gave you if you = it you win and if you go over you loose sorry for you . Bewarned the crystals value change every round.</p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>
        <p className='ProjectButtons'>
          <Button bsStyle="primary"href="https://bradleyhersey.github.io/Unit-4-game/" target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/Unit-4-game'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 2</h2>
      <Thumbnail src={ProjectHangman} alt="HangMan Game">
        <h5 className='ProjectH5'>HangMan</h5>
        <p className='ProjectP'>This is like your normal Hang Man game .
        <br/>
        I give blank spaces and and you try guess the the letters/word.
        </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>       
        <p className='ProjectButtons'>
          <Button bsStyle="primary" href='https://bradleyhersey.github.io/HangMan/index.html' target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/HangMan'target='blank'>GitHub</Button>        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 3</h2>
      <Thumbnail src={ProjectWorldTrivia} alt="World Trivia">
        <h5 className='ProjectH5'>TriviaGame</h5>
        <p className='ProjectP'>I give you clues on what I'm thinking.
          <br/> You have 3 opions to choose from. </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front End</p>
        <p className='ProjectButtons'>
        <Button bsStyle="primary" href='https://bradleyhersey.github.io/TriviaGame/'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/TriviaGame'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>;
    </Col>
    
  </Row>
  <Row>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 4</h2>
      <Thumbnail src={ProjectBamazon} alt="Bamazon">
        <h5 className='ProjectH5'>Bamazon</h5>
        <p className='ProjectP'>Bamazon its like Amazon just the back end if it.Everything is stored in mysql<br/>
        I have a video that will show you how it works. </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Back End</p>
        <p className='ProjectButtons'>
          <Button bsStyle="primary"href="https://youtu.be/_KNyfslr7LI" target='blank'>Video</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/liri-node-app/'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 5</h2>
      <Thumbnail src={ProjectTrain} alt="Train App">
        <h5 className='ProjectH5'>Train App</h5>
        <p className='ProjectP'>You enter the tarin you are looking for and where you are going.
          <br/>
          It will tell you when the next train will arriving.
          <br/>
          It was store the info of the tarin using firebaswe
        <br/>
        </p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front-Back End</p>       
        <p className='ProjectButtons'>
          <Button bsStyle="primary" href='https://bradleyhersey.github.io/HangMan/index.html' target='blank'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://github.com/BradleyHersey/HangMan'target='blank'>GitHub</Button>        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <h2  className='ProjectTitle'>My Project 6</h2>
      <Thumbnail src={ProjectFriendFinder} alt="Friend Finder">
        <h5 className='ProjectH5'>Friend-Finder</h5>
        <p className='ProjectP'>You answer a few questions and then my magic app matchs you up with someone.</p>
        <h6 className='ProjectH6'>My Role</h6>
        <p className='ProjectRole'>Front-Back End</p>
        <p className='ProjectButtons'>
        <Button bsStyle="primary" href='https://friend-finder123456.herokuapp.com/'>Project</Button>
          &nbsp;
          <Button bsStyle="default" href='https://bradleyhersey.github.io/friend-finder/'target='blank'>GitHub</Button>
        </p>
      </Thumbnail>;
    </Col>
  </Row>
</Grid>

</div>
)
export default myProject;