import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


import Head_Text from '../../Animations/Head_Text/Head_Text'
import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text'
import Animated_Container from '../../Sub_Components/Animated_Container/Animated_Container';

import Center_From_Left from '../../Animations/Center_From_Left/Center_From_Left';
import Center_From_Right from '../../Animations/Center_From_Right/Center_From_Right';

import aimgif from '../../Images/Features_Gifs/aim_t.gif';
import bookgif from '../../Images/Features_Gifs/book_t.gif';
import expandinggif from '../../Images/Features_Gifs/expanding_t.gif';
import customizegif from '../../Images/Features_Gifs/customize_t.gif';


import './Features.css';
import Gradient_Box from '../../Animations/Gradient_Box/Gradient_Box';

const cardData = [
  {
    imageSrc: bookgif,
    title: '01. Learn',
    description:"Master 'The Algo Trading Resources' provided by TheATR to craft Your Algo Trading Edge. This intellectual journey is essential to absorb these advanced and professional tools, setting you apart in the world of Algo Trading."
  },
  {
    imageSrc: expandinggif,
    title: '02. Experiment',
    description: "Dig into the exciting world of experimentation with 'The Algo Trading Resources': our Strategy Builders are designed to empower you in crafting your very own and unique Algo Trading Strategies. These tools enable you to manifest your unique vision and achieve remarkable trading success.",
  },
  {
    imageSrc: customizegif,
    title: '03. Refine',
    description: "it's time for refinements with 'The Algo Trading Resources': Backtest/Forward-Test YOUR settings to ensure YOUR Algo Trading Strategy  reliable AND robust. This is where you transform your creation into a well-oiled Algo Trading machine",
  },
  {
    imageSrc: aimgif,
    title: '04. Succeed',
    description: "Now it's time to take the Rewards produced by 'The Algo Trading Resources': Demo/Live Trade YOUR fully automated Algo Trading Strategy. With TheATR by your side, every trade is a step closer to achieving the Success you've always dreamed of.",
  },
];
function Features() {
    
    const renderCards = () => {
      const rows = [];
      for (let i = 0; i < cardData.length; i += 2) {
        const cardsInRow = cardData.slice(i, i + 2);
        const row = (
          <Row key={i}>
            {cardsInRow.map((card, index) => (
              <Col key={index} className='features-inner-col' >
                
                <Card className='custom-card'>
                  <Card.Img variant="top" src={card.imageSrc} />
                  <Card.Body>
                    <Card.Title>
                    <Bottom_Text>
                      <Head_Text text={card.title} textsize={'2.0em'} txt_col={'#9e0396'} />
                    </Bottom_Text>
                    </Card.Title>
                    <Card.Text><div className='txt-centered'>{card.description}</div></Card.Text>
                  </Card.Body>
                </Card>
                
              </Col>
            ))}
          </Row>
        );
        rows.push(row);
      }
      return rows;
    };
    const featurescontainer = 
    <Container className="features-inner-container">
      {renderCards()}
    </Container>
    
    return (
        <div>
        <Animated_Container h={'auto'} w={'100%'}  >
        <div className='features-container' >
            {featurescontainer}

        </div>
            
        </Animated_Container>
        </div>
    );
  }
  
  export default Features;