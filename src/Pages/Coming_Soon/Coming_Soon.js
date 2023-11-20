import { React, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Coming_Soon.css';

import Topnav from '../../Components/Topnav/Topnav';

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

function Coming_Soon() {

    
    

    return (
      <section >
        <Topnav/>
        <div className='coming-cut-pad' >
        <Matrix_Cascade color = "#008eb5">
            <div className='matrix-canvas coming-cut-pad'>
            <div className='coming-page'>
            
            <div className='coming-sub-cont text-center'>
  
              <Head_Text text={"Coming Soon!"} textsize={'4.5rem'} txt_col={'#9e0396'} />
                
            </div>

            </div>

            </div>
        </Matrix_Cascade>
        </div>
  
      </section>
    );
  }
  
  export default Coming_Soon;
  