import React, { useState } from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';

import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text';

import { BsPlus, BsPlusCircleFill } from 'react-icons/bs';


import './FAQ.css';

function FAQ() {
  const faqItems = [
    {
      id: 1,
      question: "Why Should I Buy the Lifetime Subscription?",
      answer: "Purchasing our Lifetime Subscription is an exceptional opportunity that won't come around again. With it, you not only gain unlimited access to all our current resources but also secure access to every new 'Algo Trading Resource' we release in the future – and we plan to launch up to 10 new resources by the end of 2024. It's a long-term investment that ensures you stay ahead in the world of Algo Trading. Don't miss out on this exclusive offer!",
    },
    {
      id: 2,
      question: "How Do I Get Access To The Free Trial?",
      answer: "To access our Free Trial, you can either join our Discord Server or send us a Direct Message (DM) on Instagram. We'll guide you through the process and get you started on your trial journey.",
    },
    {
      id: 3,
      question: "How Do I Install The EAs On MT5?",
      answer: "Installing our EAs on MT5 is incredibly simple. Just grab the EA file and effortlessly drag it into the Experts folder on MT5. No additional files or complex procedures are required – it's as straightforward as that.",
    },
    {
      id: 4,
      question: "Which Markets Can I Trade With The EA?",
      answer: "You have the flexibility to trade on every market and every timeframe using our EAs. Our resources are designed to provide you with versatility and adaptability across various Financial Markets.",
    },
    {
      id: 5,
      question: "Is There A Limit On How Many Markets I Can Trade at the Same Time?",
      answer: "There are no limits. You can simultaneously trade multiple markets by merely dragging the EA onto different charts and changing the Magic Number.",
    },
  ];

  const [activeItemId, setActiveItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setActiveItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    
    <Container>
      
      {faqItems.map((item) => (
        <div
        key={item.id}
        className={`faq-card-wrapper ${activeItemId === item.id ? 'active' : ''}`}
        >
        <Bottom_Text>
        <Card
          key={item.id}
          id='faq-card'
          className={`faq-card ${activeItemId === item.id ? 'active' : ''}`}
          onClick={() => toggleAccordion(item.id)}
        >
          <Card.Header>
            <span>{item.question}</span>
            {activeItemId === item.id ? (
              <BsPlusCircleFill className="faq-icon-active" />
            ) : (
              <BsPlus className="faq-icon" />
            )}
          </Card.Header>
          {activeItemId === item.id && (
            <Card.Body>{item.answer}</Card.Body>
          )}
        </Card>
        </Bottom_Text>
        </div>
        
      ))}
    </Container>
    
  );
}

export default FAQ;