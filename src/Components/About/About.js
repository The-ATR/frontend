import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import Neon_Container from '../../Sub_Components/Neon_Container/Neon_Container';
import Head_Text from '../../Animations/Head_Text/Head_Text'
import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text'

import Center_From_Left from '../../Animations/Center_From_Left/Center_From_Left';
import Center_From_Right from '../../Animations/Center_From_Right/Center_From_Right';

import AI_AT_1 from '../../Images/AI/AI_AT_1.png'
import AI_AT_2 from '../../Images/AI/AI_AT_2.png'

import './About.css';

function About() {
  
  return (
    <section >
    <Neon_Container color1={'#008eb5'} color2={'#008eb5a2'} color3={'#008eb5d6'} h={'100%'} w={'100%'} >
      
      <Container className="about-inner-container">
        
        <Row className="about-row">
          
            <Col className="about-column-1">
            <Center_From_Left>
                <div className="about-description">
                    <h2 className="about-headers">We Want You To Use</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'The Algo Trading Resources'} textsize={'1.5em'} txt_col={'#9e0396'} />
                    </Bottom_Text>
                    <br/>
                    <h2 className="about-headers">To Conquer</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'Financial Markets'} textsize={'1.5em'} txt_col={'#9e0396'} />
                    </Bottom_Text>
                    <h2 className="about-headers">By Building</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'Your Algo Trading Strategies'} textsize={'1.5em'} txt_col={'#9e0396'} />
                    </Bottom_Text>
                    <br/>
                    <div className='about-button-div'>
                    <a href='https://discord.gg/dA9SQ6GW9v' className='about-button-link' ><div className='about-button' >Get Started</div></a>
                    </div>
                </div>
            </Center_From_Left>
                
            </Col>
            
            <Col className="about-column-2">
                <div className="about-description2">
                    <div className="about-image" style={{ backgroundImage: `url(${AI_AT_1})` }}></div>
                </div>

            </Col>
            

          
        </Row>
        

        
      </Container>
      
    </Neon_Container>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Neon_Container color1={'#9e0396'} color2={'#9e0396d1'} color3={'#9e0396a1'} h={'100%'} w={'100%'} >
      <Container className="about-inner-container">
        <Row className="about-row">
            <Col className="about-column-2">
                <div className="about-description2">
                    <div className="about-image" style={{ backgroundImage: `url(${AI_AT_2})` }}></div>
                </div>
            </Col>
            <Col className="about-column-1">
            <Center_From_Right>
                <div className="about-description">
                    <h2 className="about-headers2">We Offer You</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'The Algo Trading Resources'} textsize={'1.5em'} txt_col={'#008eb5'} />
                    </Bottom_Text>
                    <br/>
                    <h2 className="about-headers2">Which Are METATRADER 5</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'Strategy Builders '} textsize={'1.5em'} txt_col={'#008eb5'} />
                    </Bottom_Text>
                    <h2 className="about-headers2">You Can Use To Build</h2>
                    <br/>
                    <Bottom_Text>
                    <Head_Text text={'Your Algo Trading Strategies'} textsize={'1.5em'} txt_col={'#008eb5'} />
                    </Bottom_Text>
                    <br/>
                    <div className='about-button-div'>
                    <a href='https://discord.gg/dA9SQ6GW9v' className='about-button-link' ><div className='about-button' >Get Started</div></a>
                    </div>
                </div>
            </Center_From_Right>
            </Col>
          

          
        </Row>

        
      </Container>
    </Neon_Container>
    </section>
  );
}

export default About;


{/*
          <div className="video-container">
                <div style={{ marginBottom: '15px' }}>
                <Bottom_Text>
                <Head_Text text={'Our Mission ... '} textsize={'50px'} />
                </Bottom_Text>
                </div>
                <iframe title="YouTube Video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
                
                </div>
          */}