import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Nav, Tab, Button, Card } from 'react-bootstrap';

import Head_Text from '../../Animations/Head_Text/Head_Text';
import Gradient_Box from '../../Animations/Gradient_Box/Gradient_Box';
import Animated_Btn from '../../Sub_Components/Animated_Btn/Animated_Btn';

import Center_From_Left from '../../Animations/Center_From_Left/Center_From_Left';
import Center_From_Right from '../../Animations/Center_From_Right/Center_From_Right';

import Logo from '../../Images/logo.svg';
import { ReactComponent as Icon_1 } from '../../Images/Features_Deep/trade-signals.svg';
import { ReactComponent as Icon_2 } from '../../Images/Features_Deep/money-trade-mngmt.svg';
import { ReactComponent as Icon_3 } from '../../Images/Features_Deep/automation.svg';
import { ReactComponent as Icon_4 } from '../../Images/Features_Deep/overview.svg';

import './Features_Deep.css';
import { useInView } from 'react-intersection-observer';

function Features_Deep() {

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


  const data = [
    {
        icon: <Icon_4 />,
        title: 'How It Works',
        description: 'Description 1',
        img: ''
    },
    {
      icon: <Icon_1 />,
      title: 'Trade Signals',
      description: 'Description 1',
      img: ''
    },
    {
      icon: <Icon_2 />,
      title: 'Money/Trade Management',
      description: 'Description 2',
      img: ''
    },
    {
      icon: <Icon_3 />,
      title: '100% Automation',
      description: 'Description 3',
      img: ''
    },
    
  ];
  
  const cards = [
    [
        {
          title:
          <span>
            <Head_Text text={'TheATR: YOUR Algo Trading Edge'} textsize={'auto'} txt_col={'#9e0396'} />
          </span>,
          description: "'The Algo Trading Resources' are innovative resources that empowers YOU to craft YOUR very own Algo Trading Strategies, each as unique as the individual behind it. YOU will have the freedom to design a strategy that perfectly aligns with YOUR trading preferences, risk tolerance, and financial goals.",
          image: Logo,
          link: "https://discord.gg/dA9SQ6GW9v"
        },
        {
          title:
          <span>
            <Head_Text text={'Easy To Install/Use'} textsize={'auto'} txt_col={'#9e0396'} />
          </span>,
          description: "'The Algo Trading Resources' have been designed with simplicity in mind. Installing and Utilizing these powerful tools is simple as a Walk in the park, making it accessible for traders of all levels of experience.",
          image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
        },
        {
          title:
          <span>
            <Head_Text text={'Our Tools = Years Of Professional Experience'} textsize={'auto'} txt_col={'#9e0396'} />
          </span>,
          description: "'The Algo Trading Resources' are not just random tools; you're tapping into a wealth of Professional Experience that spans years. Our commitment to excellence is reflected in every aspect of our tools, meticulously crafted and refined by Industry Experts.",
          image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
        }
        
    ],
    [
      {
        title:
        <span>
          <Head_Text text={'Main Signal'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "At the heart of each 'Algo Trading Resource' lies the 'Main Signal', which holds the key to determining the Entry Points. While the 'Main Signal' is inherently tied to the overarching approach of the 'Algo Trading Resource', it also offers a remarkable level of customization thanks to different Models.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'Confirmation Filters'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "Within 'The Algo Trading Resources' you'll discover a powerful arsenal of tools known as 'Confirmation Filters'. Their primary objective is to elevate the precision of YOUR Algo Trading Strategy, enabling it to identify and enter only the highest quality trades.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'External Filters'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "Each 'Algo Trading Resource' also offers 'External Filters': they factor in external variables and add an extra layer of robustness to YOUR trades. Examples include: SESSIONS FILTER, DAYS OF THE WEEK FILTER. ",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      }
    ],
    [
      {
        title:
        <span>
          <Head_Text text={'Advanced Stop-Loss / Trailing-Stop / Multi-TP Framework'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "'The Algo Trading Resources' provide an exceptional and highly advanced framework exclusively designed for superior risk and trade management. It encompasses a diverse range of stop-loss options, an intricate and sophisticated trailing stop mechanism, alongside with an infrastructure seamlessly integrating multiple take-profit levels.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'Exit Signals'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "Within 'The Algo Trading Resources' you'll find a crucial element known as 'Exit Signals'. Designed with precision and sophistication, 'Exit Signals' are perfect in helping to exit trades, whether it's to secure profits or cut losses. ",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'Drawdown Shield & Profit Protector'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "Both the 'Drawdown Shield' and 'Profit Protector' are indispensable Risk Management tools embedded within 'The Algo Trading Resources'. They empower YOU with prudence and control, offering a shield against losses and a protector of your well-deserved profits.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      }
    ],
    [
      {
        title:
        <span>
          <Head_Text text={'Backtest AND Optimize'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "With 'The Algo Trading Resources', you can Backtest YOUR Algo Trading Strategy with historical market data, understanding its strengths and weaknesses.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'Forward-Test Your Strategies'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "With 'The Algo Trading Resources', you can conduct Forward Tests by applying YOUR Algo Trading Strategies to live market data, assessing how your strategy performs under actual market conditions.",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      },
      {
        title:
        <span>
          <Head_Text text={'Go Live And Kill The Game'} textsize={'auto'} txt_col={'#9e0396'} />
        </span>,
        description: "'The Algo Trading Resources' provide you with the Tools, Knowledge, and Confidence To Conquer Financial Markets with YOUR Algo Trading Strategies",
        image: Logo,
        link: "https://discord.gg/dA9SQ6GW9v"
      }

    ]
  ];

  return (
    <section className="deep-features" ref={ref}>
      <Container>
        <animated.div style={aboutContentSpring}>
        <Row className="deep-features-header">
          <Col>
            <h2>Why Should You Use "The Algo Trading Resources"?</h2>
            <p>The power of "The Algo Trading Resources" allows YOU to Create YOUR Algo Trading Edge.</p>
          </Col>
        </Row>
        </animated.div>
        <animated.div style={aboutImageSpring}>
        <Row className="deep-features-content">
        <Tab.Container defaultActiveKey={1}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {data.map((item, index) => (
                  <Nav.Item key={index} className='deep-features-tab-item'>
                    <Gradient_Box children={
                    <Nav.Link className='deep-features-tab-btn' style={{textDecoration: 'none'}} eventKey={index+1}>
                    
                      <div style={{ width: '100%', height: '100%' }} className="d-flex flex-column align-items-center">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    </Nav.Link>
                    } 
                    h={'100%'} w={'100%'} />
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}> 
            <Tab.Content>
              {cards.map((tabCards, tabIndex) => (
                <Tab.Pane key={`tab${tabIndex + 1}`} eventKey={tabIndex + 1} className="show">
                  <Row className="deep-features-items">
                    {tabCards.map((item, cardIndex) => (
                      <Col md={4} key={cardIndex} className='deep-features-card-col'>
                        
                        <Gradient_Box children={
                        <Card className="my-3 deep-features-card">
                        <Card.Img className='deep-features-card-img' variant="top" src={item.image} />
                        <Card.Body className='deep-features-card-body'>
                          <Card.Title className='deep-features-card-title'>{item.title}</Card.Title>
                          <Card.Text className='deep-features-card-description' >{item.description}</Card.Text>
                          <div className='deep-features-card-button-div'>
                          <a href={item.link} className='deep-features-card-button-link' ><div className='deep-features-card-button' >Get Started</div></a>
                          </div>
                           
                          </Card.Body>
                        </Card>
                        } 
                        h={'650px'} w={'100%'} />
            
                        
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        </Row>
        </animated.div>
      </Container>
    </section>
  );
}

export default Features_Deep;