import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import {Container,Row,Col,Carousel,Card,Button} from 'react-bootstrap';

import Head_Text from '../../Animations/Head_Text/Head_Text';
import Neon_Container from '../../Sub_Components/Neon_Container/Neon_Container';


import MktStructureWizPic from '../../Images/Lib_Carousel/MktStructureWizard.jpg';

import './Lib_Carousel.css';

const Lib_Carousel = () => {

    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    const aboutImageSpring = useSpring({
        from: { opacity: 0, transform: 'translateX(-100%)' },
        to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-100%)' },
        config: { mass: 1, tension: 280, friction: 120 }
      });
    
    const aboutContentSpring = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' },
        to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(100%)' },
        config: { mass: 1, tension: 280, friction: 120 }
      });

  // Dummy data for the carousel cards
  const cards = [
    {
      title: <Head_Text text={"The Mkt Structure Wizard"} textsize={'1.4em'} txt_col={'#9e0396'} />,
      date: <span className='lib-c-span-fs'>Created Nov 01, 2023<br/> <Head_Text text={"Available Today!"} textsize={'1.2em'} txt_col={'#9e0396'}/> </span>,
      text: <span className='lib-c-span-fs'>💫 Trade Like A Wizard, Thanks To 'The Mkt Structure Wizard' 💫<br/>🎩 Take Advantage Of A Dynamic Market Structure, Powerful Orderblock AND MORE To Create YOUR Algo Trading Strategy🎩<br/><br/>💼 You Will have a Suite of Magic Wands to Maximize Profits at your Full Disposal 💼</span>,
      // You would have image URLs here
      imageUrl: MktStructureWizPic,
    },
    {
        title: <Head_Text text={"The Renko Legacy"} textsize={'1.4em'} txt_col={'#9e0396'} />,
        date: <span className='lib-c-span-fs'>..Still Building It..<br/> <Head_Text text={"Coming Soon!"} textsize={'1.2em'} txt_col={'#9e0396'}/> </span>,
        text: <span className='lib-c-span-fs'>💫 Trade Like A Wizard, Thanks To 'The Mkt Structure Wizard' 💫<br/>🎩 Take Advantage Of A Dynamic Market Structure, Powerful Orderblock AND MORE To Create YOUR Algo Trading Strategy🎩<br/><br/>💼 You Will have a Suite of Magic Wands to Maximize Profits at your Full Disposal 💼</span>,
        // You would have image URLs here
        imageUrl: MktStructureWizPic,
      },
      {
        title: <Head_Text text={"The Fall/Rise Sniper"} textsize={'1.4em'} txt_col={'#9e0396'} />,
        date: <span className='lib-c-span-fs'>..Still Building It..<br/> <Head_Text text={"Coming Soon!"} textsize={'1.2em'} txt_col={'#9e0396'}/> </span>,
        text: <span className='lib-c-span-fs'>💫 Trade Like A Wizard, Thanks To 'The Mkt Structure Wizard' 💫<br/>🎩 Take Advantage Of A Dynamic Market Structure, Powerful Orderblock AND MORE To Create YOUR Algo Trading Strategy🎩<br/><br/>💼 You Will have a Suite of Magic Wands to Maximize Profits at your Full Disposal 💼</span>,
        // You would have image URLs here
        imageUrl: MktStructureWizPic,
      },
    // ... more cards
  ];

  return (
    <section className="lib-c" ref={ref}>

    <Container>
        <animated.div style={aboutContentSpring}>
        <Row className="lib-c-header">
          <Col>
            <h2>Our Resources: "The Algo Trading Resources" Library</h2>
            <p>Explore the Suite Of "The Algo Trading Resources" we are offering.</p>
          </Col>
        </Row>
        </animated.div>
        <animated.div style={aboutImageSpring}>
            <Row className="lib-c-content">
            <Carousel indicators={false} interval={null} className="lib-c-carousel">
                {cards.map((card, idx) => (
                    <Carousel.Item key={idx} className="lib-c-carousel-item">
                    
                    <Card className="text-white bg-dark lib-c-card">
                    <Neon_Container color1={'#9e0396'} color2={'#9e0396d1'} color3={'#9e0396a1'} h={'100%'} w={'100%'} > 
                        <Card.Img src={card.imageUrl} alt="Card image" className="lib-c-card-img" />
                        <Card.Body className="lib-c-card-body">
                        <Card.Title className="lib-c-card-title">{card.title}</Card.Title>
                        <Card.Text className="lib-c-card-text">{card.date}</Card.Text>
                        <Card.Text className="lib-c-card-text">{card.text}</Card.Text>
                        <div className='lib-c-button-div'>
                        <a href='#' className='lib-c-button-link' ><div className='lib-c-button' >Get Started</div></a>
                        </div>
                        </Card.Body>
                    </Neon_Container>
                    </Card>
                    
                    </Carousel.Item>
                ))}
            </Carousel>
            </Row>
        </animated.div>
    </Container>
    
    </section>
  );
};

export default Lib_Carousel;
