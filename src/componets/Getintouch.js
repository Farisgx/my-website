import React from 'react';
import images from '../constants/images.js';
import  { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import  { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import  { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import  { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import  { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger'
import  { FaMailBulk } from '@react-icons/all-files/fa/FaMailBulk'
import  { AiOutlineMobile } from '@react-icons/all-files/ai/AiOutlineMobile'
import {Link} from 'react-scroll';







const Getintouch = () => {
    return (
            <div>
            <div className='getintouch' style={{marginTop:'0%',marginLeft:'20%'}}>
                <div className='app_navbar-logo' style={{marginTop:'3%'}}>
                    <img src={images.gericht} alt="" />
                </div>
                <ul className='app_navbar-links' style={{marginTop:'-3%',marginLeft:'33%'}}>
                    <li className='p__opensans'><FaFacebookSquare size="1.2rem" /></li>
                    <li className='p__opensans'><FaYoutube size="1.2rem" /></li>
                    <li className='p__opensans'><FaTwitter size="1.2rem" /></li>
                    <li className='p__opensans'><FaInstagram size="1.2rem" /></li>
                </ul>
                <div className='app_navbar-bottom2 ' style={{width:'64%',marginTop:'2%'}}></div>
            <div>
                <h3 style={{marginRight:'80%',marginTop:'6%' ,color:'white'}}>Site map.</h3>
                <div className='app_navbar-bottom2 ' style={{width:'10%',marginLeft: '3%' , marginTop:'1%' , fontFamily:'proxima-nova' }}></div>
                <ul style={{marginRight: '80%' , marginTop:'3%' , fontSize:'medium' , color:'white' ,listStyle:'none'}}>
                    <li className='p__opensans' style={{marginTop:'8%'}}><Link activeClass="active" to="home" spy={true} >Home</Link></li>
                    <li className='p__opensans' style={{marginTop:'8%'}}><Link activeClass="active" to="ourclients" spy={true} >Our clients</Link></li>
                    <li className='p__opensans' style={{marginTop:'8%'}}><Link activeClass="active" to="ourwork" spy={true}>Our Work</Link></li>
                    <li className='p__opensans' style={{marginTop:'8%'}}><Link activeClass="active" to="aboutus"  spy={true}>About us</Link></li>
                    <li className='p__opensans' style={{marginTop:'8%'}}><Link activeClass="active" to="contactus" spy={true}>Get in touch</Link></li>
                    </ul>
                </div>
                <div>
                <div>
                    <h3 style={{marginRight:'24%',marginTop:'-24%' ,color:'white'}}>contact us.</h3>
                    <div className='app_navbar-bottom2' style={{width:'10%',marginLeft: '25%' , marginTop:'1%' , fontFamily:'proxima-nova'}}></div>
                    <ul className='get-links' style={{marginRight: '24%' , marginTop:'2.8%' , fontSize:'medium' , color:'white',listStyle:'none'}}>
                    <li className='p__opensans2' style={{marginTop:'8%'}}> +24990900909 <AiOutlineMobile size="1.5rem" style={{marginTop: '-.5%'}} /> </li>
                    <li className='p__opensans2' style={{marginTop:'3%'}}>  thisisemail@gmail.com <FaMailBulk size="1.2rem"   style={{marginTop: '-.5%'}}/></li>
                    <li className='p__opensans2' style={{marginTop:'3%'}}>  FaceBook messenger <FaFacebookMessenger size="1.2rem" style={{marginTop: '.5%'}}/></li>
                    
                    </ul>

                </div>

            <div className='startproject' style={{marginTop:'-12%',marginLeft:'35%',color:'white'}}>
                <h2>Looking to start a project?</h2>
                <h6>Our expert team are on hand to help you</h6>
                <h6>achieve your goals through the power of</h6>
                <h6>video. Fill out our quick and simple form to</h6>
                <h6>get started...</h6>
                <h2>start a new project now +</h2>

            </div>
            <div className='startproject' style={{marginTop:'20%',marginLeft:'60%',color:'white'}}>
                <h6>Copyright © faris Film Media Ltd 2022 - All Rights Reserved</h6>
            </div>
       
            
        </div> 
            </div>
            {/* 
            */}
        </div>
    );
};

export default Getintouch;