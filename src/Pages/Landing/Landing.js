import React from 'react';
import { Container } from 'react-bootstrap';

import Topnav from '../../Components/Topnav/Topnav'; 
import Dummy_Box from '../../Components/Dummy_Box/Dummy_Box';

import Heroes from '../../Components/Hero/Heroes';
import About from '../../Components/About/About';
import Features from '../../Components/Features/Features';
import MT5 from '../../Components/MT5/MT5';
import Features_Deep from '../../Components/Features_Deep/Features_Deep';
import Lib_Carousel from '../../Components/Lib_Carousel/Lib_Carousel';
import Pricing from '../../Components/Pricing/Pricing';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FAQ from '../../Components/FAQ/FAQ';
import Community from '../../Components/Community/Community';
import Footer from '../../Components/Footer/Footer';


import Divider from '../../Sub_Components/Divider/Divider';

import './Landing.css';

const Landing = () => {
    return (
      <div className='landing'>
        
        <Topnav/>
        
        <Container>
            <Heroes/>

            <section id='about'>
            <Divider text={"Our Mission..."} textsize={'3.5rem'} />
            <About/>
            </section>
            
            <Divider text={"...Your Mission"} textsize={'3.5rem'} />
            <Features/>

            <section id='resources'>
            <Divider text={"The Algo Trading Resources"} textsize={'3.5rem'} />
            <Features_Deep/>
            <MT5/>
            </section>

            <Divider text={"The Library"} textsize={'3.5rem'} />
            <Lib_Carousel/>

            <section id='pricing'>
            <Divider text={"Get Started Now!"} textsize={'3.5rem'} />
            <Pricing/>
            </section>

            <Divider text={"Reviews"} textsize={'3.5rem'} />
            <Testimonials/>

            <section id='faq'>
            <Divider text={"F.A.Q."} textsize={'3.5rem'} />
            <FAQ/>
            </section>


        </Container>
        <Community/>
        <Footer/>
        {/*
        <Topnav/>
        <Container>
          <Hero/>
          <Divider text={"Our Mission..."} textsize={'75px'} />
          <About/>
          <Divider text={"...Your Mission"} textsize={'75px'} />
          <Features/>
          <Divider text={"The Algo Trading Resources"} textsize={'75px'} />
          <MT5/>
          <Features_Deep/>
          <Divider text={"The Library"} textsize={'75px'} />
          <Lib_Carousel/>
          <Divider text={"Subscribe Now!"} textsize={'75px'} />
          <Pricing/>
          <Divider text={"F.A.Q."} textsize={'75px'} />
          <FAQ/>
          

        </Container>
        <Community/>
        <Footer/>
        */}
        

        {/* <Container>
          <Hero/>
          <Divider text={"Our Mission"} textsize={'100px'} />
          <About/>
          <Features/>
          <FeaturesDeep/>
          <Divider text={"Our Algo Trading\nResources"} textsize={'100px'} />
          <Carousel_ATR/>
          <Divider text={"Subscribe Now!"} textsize={'100px'} />
          <Pricing/>
          <Divider text={"F.A.Q."} textsize={'100px'} />
          <FAQ/>
          
        </Container>
        <Community/>
        <Footer/>
        <DiscountPopUp /> */}
      </div>
    );
  };
  
  export default Landing;