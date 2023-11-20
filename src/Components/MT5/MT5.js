import { React, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


import Head_Text from '../../Animations/Head_Text/Head_Text';
import Bottom_Text from '../../Animations/Bottom_Text/Bottom_Text';

import Neon_Container from '../../Sub_Components/Neon_Container/Neon_Container';

import Social_Icon from '../../Sub_Components/Social_Icon/Social_Icon';
import mt5png from '../../Images/Social_Icons/MT5.png';

import { useSpring, animated } from 'react-spring';

import './MT5.css';

function MT5() {

    
    

    return (
      <section >
        <Bottom_Text>
        <div className='mt5-cont'>
        <Neon_Container color1={'#008eb5'} color2={'#008eb5a2'} color3={'#008eb5d6'} h={'100%'} w={'100%'} >
        <Row >
            <Col md={12}>
                <div className='mt5-sub-cont text-center'>

                <Head_Text text={"The Algo Trading Resouces:"} textsize={'2.5em'} txt_col={'#008eb5'} />
                <Head_Text text={"Metatrader 5"} textsize={'2.5em'} txt_col={'#008eb5'} />
                <Head_Text text={"Algo Trading Strategies Builders"} textsize={'2.5em'} txt_col={'#008eb5'} />

                <br/>
                <br/>

                <div className="justify-content-center d-flex align-items-center" style={{ marginRight: '30px' }}>
                    <div style={{ marginRight: '10px' }} ><Social_Icon  src={mt5png} url={'/'} h={'100px'} w = {'100px'} /></div>
    
                </div>

                <br/>
                <br/>
                
                <h2>Download MT5 And Conquer Financial Markets With Us!</h2>
                <br/>
                <br/>

                <div className='mt5-button-div'>
                    <a href='#' className='mt5-button-link' ><div className='mt5-button' >Get Started</div></a>
                </div>
                
                


                </div>

                
            </Col>
            
            
        </Row>
            
        </Neon_Container>
        </div>
        </Bottom_Text>

        
      </section>
    );
  }
  
  export default MT5;
  