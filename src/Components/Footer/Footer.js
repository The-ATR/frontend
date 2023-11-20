import { React, useState } from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './Footer.css';

import { Link } from 'react-router-dom';

import Social_Icon from '../../Sub_Components/Social_Icon/Social_Icon';
import ytlogowhitesvg from '../../Images/Social_Icons/ytlogowhitesvg.svg';
import disclogowhitesvg from '../../Images/Social_Icons/disclogowhitesvg.svg';
import instalogowhitesvg from '../../Images/Social_Icons/instalogowhitesvg.svg';
import twitterlogowhitesvg from '../../Images/Social_Icons/twitterlogowhitesvg.svg';
import tiktoklogowhitesvg from '../../Images/Social_Icons/tiktoklogowhitesvg.svg';
import tradingviewlogowhitesvg from '../../Images/Social_Icons/tradingviewlogowhitesvg.svg';

import Logo from '../../Images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col className="footer-column1">
            <div className="footer-logo">
            <Navbar.Brand href="#home">
            <img
                alt="Logo"
                src={Logo}
                width="200"
                height="200"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            </div>
            <h4 className='footer-h4'>Disclaimer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis diam et erat tempor, ut ullamcorper lectus commodo.
              Nullam feugiat luctus sagittis.
            </p>
          </Col>
          <Col className="footer-column2">
            <h4 className='footer-h4'>Our Goal</h4>
            <div className="footer-divider"></div>
            <Nav.Link href="#about" >About Us</Nav.Link>
            <Nav.Link href="#resources" >The Resources</Nav.Link>
            <Nav.Link href="#pricing" >Get Started Now</Nav.Link>
            <Nav.Link href="#faq" >FAQ</Nav.Link>
          </Col>
          <Col className="footer-column2">
            <h4 className='footer-h4'>Algo Trading Resources</h4>
            <div className="footer-divider"></div>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link >The Resources</Nav.Link></Link>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>The Experience</Nav.Link></Link>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>The Team</Nav.Link></Link>
            <div className="divider"></div>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>Docs</Nav.Link></Link>
          </Col>
          <Col className="footer-column2">
            <h4 className='footer-h4'>Other Quick Links</h4>
            <div className="divider"></div>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>Login/Signup</Nav.Link></Link>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>T&C</Nav.Link></Link>
            <Link className='nav-btn-link' to="/coming_soon"><Nav.Link>Disclaimer</Nav.Link></Link>
          </Col>
        </Row>
        <Row className="footer-row">
          
          <Col className="footer-column3">
          <div className="justify-content-end d-flex align-items-center" style={{ marginRight: '30px' }}>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={disclogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={ytlogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={instalogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={twitterlogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={tiktoklogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>
            <div style={{ marginRight: '10px' }} ><Social_Icon  src={tradingviewlogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div>

          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;