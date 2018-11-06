import React from 'react';
import "./aboutme.css";
import { Jumbotron} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

const AboutMe =(props)=>(
    <div className="Aboutme">

    
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>;
  
  

</div> 
)
export default AboutMe;