import React from 'react';
import './Navbar.css';
import { Brand, Nav, Navbar,MenuItem,NavDropdown, Header, Collapse, NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

const NavBar1 = (props) =>

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand id="home">
      <a href="/aboutme"> Bradley Hersey</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/resume">
        Resume
      </NavItem>
      <NavItem eventKey={2} href="/projects">
        Projects
      </NavItem>
      <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}  href="https://www.linkedin.com/in/bradleyhersey/" target="blank">LinkedIN</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.2}  href= "mailto:bradleyhersey00@gmail.com" target="_top">Email Me</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}  href="https://github.com/BradleyHersey" target="blank">GitHub</MenuItem>
        {/* <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
      </NavDropdown>
    </Nav>
     {/* <Nav pullRight>
      <NavItem eventKey={1} href="https://bradleyhersey.github.io/Bootstrap-Portfolio/">
        My First Portfolio
      </NavItem>
      <NavItem eventKey={2} href="/allprojects">
        allprojects
      </NavItem>
    </Nav>  */}
  </Navbar.Collapse>
</Navbar>;



export default NavBar1;