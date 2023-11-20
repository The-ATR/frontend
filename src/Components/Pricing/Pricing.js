import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Nav, Tab, Button, Card } from 'react-bootstrap';

import Head_Text from '../../Animations/Head_Text/Head_Text';
import Gradient_Box from '../../Animations/Gradient_Box/Gradient_Box';
import Animated_Btn from '../../Sub_Components/Animated_Btn/Animated_Btn';

import Logo from '../../Images/logo.svg';
import { ReactComponent as Icon_1 } from '../../Images/Features_Deep/trade-signals.svg';
import { ReactComponent as Icon_2 } from '../../Images/Features_Deep/money-trade-mngmt.svg';
import { ReactComponent as Icon_3 } from '../../Images/Features_Deep/automation.svg';
import { ReactComponent as Icon_4 } from '../../Images/Features_Deep/overview.svg';

import './Pricing.css';
import { useInView } from 'react-intersection-observer';

function Pricing() {

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
      link: "https://discord.gg/dA9SQ6GW9v",
      title: <Head_Text text={'Trial'} textsize={'auto'} />,
      description: 'Description 1',
      img: ''
    },
    
    {
      link: "https://thealgotradingresources-test.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=TheATR_Lifetime-USD-Yearly&subscription_items[quantity][0]=1&layout=in_app",
      title: <Head_Text text={'Lifetime'} textsize={'auto'} />,
      description: 'Description 3',
      img: ''
    },
    
  ];
  
  const cards = [
    [
      {
        title:
        <span>
          <Head_Text text={'Trial'} textsize={'auto'} />
        </span>,
        link: "https://discord.gg/7NkcpKGsv2",
        description: "The Algo Trading Resources are based on specific trading approaches, referred to as ‘Main Signal Providers’, which generate signals that are validated by ‘Confirmation Filters’.",
        price: 'FREE',
        crossedPrice: '$9.99',
        features: ['🆓 FREE Trial 🆓', '⌛ 48H Expiration ⌛', '✅ ALL Features Included ✅', '💬 Contact Us Now 💬'],
        image: Logo
      },
        
    ],
    
    [
      {
        title:
        <span>
          <Head_Text text={'Lifetime'} textsize={'auto'} />
        </span>,
        link: "https://thealgotradingresources-test.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=TheATR_Lifetime-USD-Yearly&subscription_items[quantity][0]=1&subscription_items[item_price_id][1]=TheATR_Lifetime_FEE-USD&layout=in_app",
        description: "The Algo Trading Resources are hosted on Trading View, and they offer powerful and professional backtests thanks to their framework, usars can develop customized trading strategies and test them on historical data to see how they would have performed.",
        price: '$499.99 (50% OFF)',
        crossedPrice: '$999.99',
        features: ['♾ Lifetime Access ♾', '🆓 NEW Resources Included 🆓', '✅ ALL Features Included ✅', '⭐ VIP Discord ⭐', '💬 Suite Weekly Meets 💬', '💬 Contact Us Now 💬'],
        image: Logo
      },
      

    ]
  ];


  return (
    <section className="pricing" ref={ref}>
      <Container>
        <animated.div style={aboutContentSpring}>
        <Row className="pricing-header">
          <Col>
            <h2>Unlock the Power of "The Algo Trading Resources" TODAY!</h2>
            <p>Select the perfect plan for you and take your Algo Trading game to the next level.</p>
          </Col>
        </Row>
        </animated.div>
        <animated.div style={aboutImageSpring}>
        <Row className="pricing-content">
        <Tab.Container defaultActiveKey={1}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {data.map((item, index) => (
                  <Nav.Item key={index}>
                    <Gradient_Box children={
                    <Nav.Link className='pricing-tab-btn' style={{textDecoration: 'none'}} eventKey={index+1}>
                    
                      <div style={{ width: '100%', height: '100%' }} className="d-flex flex-column align-items-center justify-content-center">
                        
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
                  <Row className="pricing-items">
                    {tabCards.map((item, cardIndex) => (
                      <Col md={4} key={cardIndex}>
                        
                        <Gradient_Box children={
                        <Card className="my-3 pricing-card">
                        <Card.Img className="pricing-card-img" variant="top" src={item.image} />
                        <Card.Body className="pricing-card-body">
                          <Card.Title className="pricing-card-title" style={{ fontSize: '1.5rem' }}>
                            {item.title}
                          </Card.Title>
                          <div className="pricing-section">
                            <div className="pricing-current-price">{item.price}</div>
                            <div className="pricing-crossed-price">{item.crossedPrice}</div>
                          </div>
                          <ul className="pricing-card-features">
                            {item.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                          <div className='pricing-card-button-div'>
                          <a href={item.link} className='pricing-card-button-link' ><div className='pricing-card-button' >Get Started</div></a>
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

export default Pricing;



{/*
    {
      title: <Head_Text text={'Monthly'} textsize={'auto'} />,
      description: 'Description 1',
      img: ''
    },
    {
      title: <Head_Text text={'Yearly'} textsize={'auto'} />,
      description: 'Description 2',
      img: ''
    },
    */}
{/* 
    [
      {
        title:
        <span>
          <Head_Text text={'TheATR Starter'} textsize={'auto'} />
        </span>,
        description: "The Algo Trading Resources are based on specific trading approaches, referred to as ‘Main Signal Providers’, which generate signals that are validated by ‘Confirmation Filters’.",
        price: '$29.99',
        crossedPrice: '$49.99',
        features: ['💬 24/7 Support', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:2 Accounts', '❌ NO MetaTrader 5 Bridge'],
        image: Logo
      },
      {
        title:
        <span>
          <Head_Text text={'TheATR Pro'} textsize={'auto'} />
        </span>,
        description: "'Sessions Filters', is a feature that makes The Algo Trading Resources to trade only during the most profitable hours of the day.",
        price: '$59.99',
        crossedPrice: '$89.99',
        features: ['💬 24/7 Support', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:6 Accounts', '❌ NO MetaTrader 5 Bridge'],
        image: Logo
      },
      {
        title:
        <span>
          <Head_Text text={'TheATR Suite'} textsize={'auto'} />
        </span>,
        description: "The Algo Trading Resources have the 'Safety Shields Filters', designed to protect Accounts from large Drawdowns, and the 'Profit Protector', which helps to secure gains and ensure profitability.",
        price: '$89.99',
        crossedPrice: '$119.99',
        features: ['💬 24/7 Support', '💬 Suite Weekly Meets', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:9 Accounts', '✅ MetaTrader 5 Bridge:9 Accounts'],
        image: Logo
      }
    ],
    [
      {
        title:
        <span>
          <Head_Text text={'TheATR Starter'} textsize={'auto'} />
        </span>,
        description: "The Algo Trading Resources embed an advanced Money Management Framework which allows users to take advantage of 'Customizable SL' (Fixed/ATR/%/ and more) and also of a 'Multi-TPs Infrastructure', which has up to three Customizable TPs settable by RiskReward Ratios.",
        price: '$289.99 (20% OFF)',
        crossedPrice: '$359.99',
        features: ['💬 24/7 Support', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:10 Accounts', '❌ NO MetaTrader 5 Bridge'],
        image: Logo
      },
      {
        title:
        <span>
          <Head_Text text={'TheATR Pro'} textsize={'auto'} />
        </span>,
        description: "The Algo Trading Resources provide an advanced Framework for Trade Management, which includes the most professional 'Customizable Trailing Stop' ever, a sophisticated Break-Even Stop technique, and a wide range of powerful triggers.",
        price: '$569.99 (20% OFF)',
        crossedPrice: '$709.99',
        features: ['💬 24/7 Support', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:20 Accounts', '❌ NO MetaTrader 5 Bridge'],
        image: Logo
      },
      {
        title:
        <span>
          <Head_Text text={'TheATR Suite'} textsize={'auto'} />
        </span>,
        description: "In The Algo Trading Resources sophisticated Trade Management Framework, Unique 'Exit Signals' are also present, and they can hugely help traders to cut and minimize losses.",
        price: '$859.99 (20% OFF)',
        crossedPrice: '$1069.99',
        features: ['💬 24/7 Support', '💬 Suite Weekly Meets', '✅ ALL AlgoTrading Resources', '✅ Broker/Exchange Bridges:30 Accounts', '✅ MetaTrader 5 Bridge:30 Accounts'],
        image: Logo
      }
    ],
    */}