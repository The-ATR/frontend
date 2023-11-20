import { React, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Community.css';

import Matrix_Cascade from '../../Animations/Matrix_Cascade/Matrix_Cascade';
import Head_Text from '../../Animations/Head_Text/Head_Text';

import Social_Icon from '../../Sub_Components/Social_Icon/Social_Icon';
import ytlogowhitesvg from '../../Images/Social_Icons/ytlogowhitesvg.svg';
import disclogowhitesvg from '../../Images/Social_Icons/disclogowhitesvg.svg';
import instalogowhitesvg from '../../Images/Social_Icons/instalogowhitesvg.svg';
import twitterlogowhitesvg from '../../Images/Social_Icons/twitterlogowhitesvg.svg';
import tiktoklogowhitesvg from '../../Images/Social_Icons/tiktoklogowhitesvg.svg';
import tradingviewlogowhitesvg from '../../Images/Social_Icons/tradingviewlogowhitesvg.svg';

import { useSpring, animated } from 'react-spring';

function Community() {

    
    

    return (
      <section >
        <div className='community-detach'>
  
          
  
          <Matrix_Cascade color = "#008eb5">
              <Container className="community matrix-canvas">
      
                  <Row >
                  <Col md={12}>
                      <div className='community-sub-cont text-center'>
  
                        <Head_Text text={"Join Our Community"} textsize={'2.0rem'} txt_col={'#9e0396'} />
                        <br/>
                        <br/>
                        <h4>The Best Algo Traders Community Ever Existed!</h4>
                        <br/>
                        
                        <div className="community-social-div-container">

                          <div className='community-social-div'><Social_Icon  src={disclogowhitesvg} url={'https://www.youtube.com/channel/UCULHTGjmm2_cI1JqkVRN57Q'} h={'50px'} w = {'50px'} /></div>
                          <div className='community-social-div'><Social_Icon  src={ytlogowhitesvg} url={'https://www.instagram.com/thealgotradingresources/'} h={'50px'} w = {'50px'} /></div>
                          <div className='community-social-div'><Social_Icon  src={instalogowhitesvg} url={'https://www.instagram.com/thealgotradingresources/'} h={'50px'} w = {'50px'} /></div>
                          <div className='community-social-div'><Social_Icon  src={twitterlogowhitesvg} url={'https://twitter.com/TheATR_suite'} h={'50px'} w = {'50px'} /></div>
                          <div className='community-social-div'><Social_Icon  src={tiktoklogowhitesvg} url={'https://www.tiktok.com/@thealgotradingresources?lang=it-IT'} h={'50px'} w = {'50px'} /></div>
                          <div className='community-social-div'><Social_Icon  src={tradingviewlogowhitesvg} url={'/'} h={'50px'} w = {'50px'} /></div> 
            
                        </div>
              


                      </div>

                      
                  </Col>
                  
                  
                  </Row>

                  
                  
  
              </Container>
          </Matrix_Cascade>
          
        </div>
  
      </section>
    );
  }
  
  export default Community;
  