import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Head_Text from '../../Animations/Head_Text/Head_Text'
import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text'

import './Divider.css'; // Import the CSS file for the section divider

function Divider({ text, textsize }) {

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });


  const CaptionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
    config: { mass: 1, tension: 280, friction: 120 }
  });

  return (
    <div ref={ref} className='divider-extreme'>

    <div className="divider">
      <div className="divider-col"></div>
    </div>
    <Bottom_Text className="text-center">
      
      <Container className="justify-content-center">
        <Row className="divider-intro-container">
          <br />
          <Col className="divider-header">
            <Head_Text text={text} textsize={textsize} txt_col={'#9e0396'} />
          </Col>
        </Row>
      </Container>
    </Bottom_Text>
    <div className="divider">
      <div className="divider-col"></div>
    </div>

    </div>
  );
}

export default Divider;