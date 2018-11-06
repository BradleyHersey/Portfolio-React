import React from 'react';
import "./resume.css";
import { Jumbotron} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

const myResume =(props)=>(
    <div className="resume">

    
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
         resume
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>;
  
  

</div> 
)
export default myResume;