import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'react-bootstrap';

import { useInView } from 'react-intersection-observer';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaStar } from 'react-icons/fa'; // Make sure to install react-icons if not already done

import Animated_Container from '../../Sub_Components/Animated_Container/Animated_Container';

import Droid_Face_1 from '../../Images/Testimonials/Droid_Face_1.png';
import Droid_Face_2 from '../../Images/Testimonials/Droid_Face_2.png';
import Droid_Face_3 from '../../Images/Testimonials/Droid_Face_3.png';

import './Testimonials.css'; // Make sure to create this CSS file

const testimonialsData = [
  // Add your testimonials data here
  {
    image: Droid_Face_1,
    title: 'Android 1',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_2,
    title: 'Android 2',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_3,
    title: 'Android 3',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_1,
    title: 'Android 4',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_2,
    title: 'Android 5',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_3,
    title: 'Android 6',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_2,
    title: 'Android 7',
    rating: 5,
    description: 'This product really helped me...'
  },
  {
    image: Droid_Face_3,
    title: 'Android 8',
    rating: 5,
    description: 'This product really helped me...'
  }
  // ...more testimonials
];
const Testimonials = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    const aboutContentSpring = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' },
        to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(100%)' },
        config: { mass: 1, tension: 280, friction: 120 }
      });
    
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        // You can add more breakpoints here
      ],
    };
  
    return (
    <section className="deep-features" ref={ref}>
      <animated.div style={aboutContentSpring}>
      <Row className="deep-features-header">
        <Col>
          <h2>Are "The Algo Trading Resources" Worth It?</h2>
          <p>Have A Look To What Other Have To Say About Us.</p>
        </Col>
      </Row>
      </animated.div>
      <div className="testimonials-container">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div className='testimonial-div'>
            <Animated_Container  >
            <div key={index} className="testimonial">
              <img src={testimonial.image} alt="testimonial" className="testimonial-image" />
              <h4 className="testimonial-title">{testimonial.title}</h4>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
            </Animated_Container>
            </div>
        ))}
        </Slider>
      </div>
      </section>
    );
  };
  
  export default Testimonials;