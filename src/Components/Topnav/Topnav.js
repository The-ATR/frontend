import { React, useState } from 'react';

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Animated_Btn from '../../Sub_Components/Animated_Btn/Animated_Btn';
import Social_Icon from '../../Sub_Components/Social_Icon/Social_Icon';

import ytlogowhitesvg from '../../Images/Social_Icons/ytlogowhitesvg.svg';
import disclogowhitesvg from '../../Images/Social_Icons/disclogowhitesvg.svg';
import instalogowhitesvg from '../../Images/Social_Icons/instalogowhitesvg.svg';
import twitterlogowhitesvg from '../../Images/Social_Icons/twitterlogowhitesvg.svg';
import tiktoklogowhitesvg from '../../Images/Social_Icons/tiktoklogowhitesvg.svg';
import tradingviewlogowhitesvg from '../../Images/Social_Icons/tradingviewlogowhitesvg.svg';

import Logo from '../../Images/logo.svg';


import './Topnav.css';

function Topnav() {
  

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpand = () => {
    setIsNavExpanded(true);
  };

  const handleNavCollapse = () => {
    setIsNavExpanded(false);
  };
  
    return (
      
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Container >
          <Link className='nav-btn-link' to="/">
          <Navbar.Brand href="">
          <img
              alt="Logo"
              src={Logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavDropdown title="Mission" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#resources">
                  The Resources
                </NavDropdown.Item>
                <NavDropdown.Item href="#pricing">Get Started Now</NavDropdown.Item>
                <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
              </NavDropdown>
              
              <Link className='nav-btn-link' to="/coming_soon"><Nav.Link href="/">Resources</Nav.Link></Link>
              <Link className='nav-btn-link' to="/coming_soon"><Nav.Link href="/">Experience</Nav.Link></Link>
              <Link className='nav-btn-link' to="/coming_soon"><Nav.Link href="/">Team</Nav.Link></Link>
              <Link className='nav-btn-link' to="/coming_soon"><Nav.Link href="/">Docs</Nav.Link></Link>
            </Nav>
            <Nav>
              
              <div className="nav-social-div-container">

              
              <div className='nav-social-div'><Social_Icon  src={disclogowhitesvg} url={'https://www.youtube.com/channel/UCULHTGjmm2_cI1JqkVRN57Q'} h={'50px'} w = {'50px'} /></div>
              <Link to="/coming_soon">
                <div className='nav-social-div'><Social_Icon  src={ytlogowhitesvg} url={''} h={'50px'} w = {'50px'} /></div>
              </Link>
                <div className='nav-social-div'><Social_Icon  src={instalogowhitesvg} url={'https://www.instagram.com/thealgotradingresources/'} h={'50px'} w = {'50px'} /></div>
                <div className='nav-social-div'><Social_Icon  src={twitterlogowhitesvg} url={'https://twitter.com/TheATR_suite'} h={'50px'} w = {'50px'} /></div>
                <div className='nav-social-div'><Social_Icon  src={tiktoklogowhitesvg} url={'https://www.tiktok.com/@thealgotradingresources?lang=it-IT'} h={'50px'} w = {'50px'} /></div>
                <div className='nav-social-div'><Social_Icon  src={tradingviewlogowhitesvg} url={'https://it.tradingview.com/u/theATR/'} h={'50px'} w = {'50px'} /></div> 
  
              </div>
              
              <div className='nav-login' >
              <Link className='nav-btn-link' to="/coming_soon">
                <Animated_Btn  text={'Login/Signup'} url={'/'} h={'50px'} w = {'150px'} bgcol = {'#333'}/> 
              </Link>  
              </div>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Topnav;