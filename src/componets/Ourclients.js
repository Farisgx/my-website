import React, { useEffect } from 'react';
import './Ourclients.css';
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Ourclients = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        
        <div>
        <div>
        <div className='ourclients' data-aos="fade-up">
        
            <h1>Our clients.</h1>
            <h3>/</h3>
            <h5>our films connect people with your business,we've</h5>
            <h5>completed many video production projects for </h5>
            <h5>leading Sudan and international brands,in sectors including</h5>
            <h5>manufacturing, technology,advertising,tourism and</h5>
            <h5>education.</h5>
            <h3>/</h3>
            <h5>We can help you attract new customers share your</h5>
            <h5>message with other companies and engage employees</h5>
            <h5>whatever you do,video can communicate it like nothing</h5>
            <h5>else.</h5>
        
        </div>
        </div>
        <div>
        <div className='ourclients2' data-aos="fade-up">
            <div className='bigbox1'/>
            <div className='bigbox2' style={{marginLeft:'50%'}}/>
        </div>
        <div className='ourclients3' data-aos="fade-up">
            <div className='bigbox1'/>
            <div className='bigbox2' style={{marginLeft:'50%'}}/>
        </div>
        <div className='ourclients4' data-aos="fade-up">
            <div className='bigbox1'/>
            <div className='bigbox2' style={{marginLeft:'50%'}}/>
        </div>
            {/* <div className='bigbox3'/>
            <div className='bigbox4'/>
            <div className='bigbox5'/>
            <div className='bigbox6'/>  */}
                 
        
        </div> 
        
        </div>
        
    
    );
};

export default Ourclients;