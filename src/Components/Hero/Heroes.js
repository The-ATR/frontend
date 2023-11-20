import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Heroes.css'; // Make sure to import the CSS file

import Animated_Txt from '../../Sub_Components/Animated_Txt/Animated_Txt';
import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text';

import Hero_1 from '../../Images/Hero_Back/Hero_1.png';

function Heroes() {

  const heroText = ['THEATR', 'YOUR', 'ALGO TRADING', 'EDGE.'];

  return (
    <div className="hero-background" style={{ backgroundImage: `url(${Hero_1})` }}>
      <Container className="hero-container">
        {heroText.map((text, index) => (
          <div key={index} className={`hero-text hero-text-${index}`}>
            
            <Animated_Txt text={text} h="100%" w="100%" />
            
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Heroes;

{/*

HOW MY OLD HERO WORKED

*/}