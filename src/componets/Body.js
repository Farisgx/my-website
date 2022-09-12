import React, { useEffect } from 'react';
import './Body.css'
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

const Body = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <div>
        <div className='bod' data-aos="zoom-in-up">
            <div className='horzline'></div>
            <h1>Tell us what you need...</h1>
            
            <h5>Got a project,an idea,our just want to ask a question?</h5>
            <h5>contact us today and </h5>
            <h5>find out how we can help your besiness succeed.</h5>
            <div className='horzline'></div>
            

        </div>
            <div className='section2' data-aos="zoom-in-left">
                <h1>Who Are We?</h1>
                <h5>we're an award-winning specialists flim production and</h5>
                <h5>animation company, based in Khartoun and working across</h5>
                <h5>the Sudan from darfur to dongola</h5>
                <h3>/</h3>
                <h5>our team includes expert producers,editors,camera</h5>
                <h5>operators,motion designers and drone pilots - all the skills</h5>
                <h5>needed to turb your brief into a high-quiality creative work.</h5>
            </div>
            <div className='vl' style={{marginTop:'110%',marginLeft:'20%'}}></div>
            <div className='vl' style={{marginTop:'110%',marginLeft:'-20%'}}></div>
            <div className='section3' data-aos="zoom-in-right">
                <h1>What We Do</h1>
                <h5>Whether it’s social media content, internal communications</h5>
                <h5>or a full brand campaign, our films bring your stories to life.</h5>
                <h5>We love a challenge and offer everything from video</h5>
                <h5>production to motion graphics and immersive 360</h5>
                <h5>experiences. Product launches, training films and live event</h5>
                <h5>coverage are all in a days  or nights , work for us.</h5>
                
            </div>
            <div className='section4' data-aos="zoom-in-right">
                <img width={150} height={150} src={img1} alt=''/>
                <img width={150} height={150} src={img2} alt=''/>
                <img width={150} height={150} src={img3}alt=''/>
            </div>
            <div className='section5' data-aos="zoom-in-up">
                <img className='section5-image1' width={260} height={150} src={img4} alt=''/>
                <img className='section5-image2' width={260} height={150} src={img5} alt=''/>
                
            
            </div>
        </div>
    );
};

export default Body;