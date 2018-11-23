import React, { Component } from 'react';
import { Route, render} from 'react-router-dom';
import './App.css';
import projects from './components/projects/projects.js';
import resume from './components/resume/resume.js';
import Navbar1 from './components/Navbar/Navbar.js';
import BubbleFun1 from './components/BubbleFun/BubbleFun.js';
 import AboutMe from './components/AboutMe/aboutme';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar1/>
      <BubbleFun1/>
      <Route exact path='/aboutme' component={AboutMe} />
      <Route  path='/resume' component={resume} />
      <Route  path='/projects' component={projects} />
      </div>
    );
  }
}

export default App;
