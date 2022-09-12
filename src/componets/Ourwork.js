import React, { useEffect } from 'react';
import './Ourwork.css';
import ReactPlayer from 'react-player';
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import  { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
// import { IconContext } from '@react-icons';

  
const OurWork = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <div>
            <div>
                <div  className='ourwork' data-aos="fade-up">
                    <h1>Our Work</h1>
                </div>
                <div className='video1' data-aos="fade-up">
                    <ReactPlayer light={true} width={340} height={190}   url='https://youtu.be/lmV3wZKh4b4'/>
                </div>
                <div className='video2' data-aos="fade-up">
                    <ReactPlayer light={true} width={480} height={270}  url='https://youtu.be/lmV3wZKh4b4'/>
                </div>
                <div className='video3' data-aos="fade-up">
                    <ReactPlayer light={true} width={340} height={190}  url='https://youtu.be/lmV3wZKh4b4'/>
                </div>
                {/* <ul className='videop'>
                    <div style={{marginLeft:"10%",width:"100%",height:"100%"}}></div>
                </ul>
                    <div style={{width:"100%",height:"100%"}}><ReactPlayer light={true} width={340} height={190}  url='https://youtu.be/UwBM8R_i8pY'/></div>
                    <div style={{marginRight:"10%",width:"100%",height:"100%"}}><ReactPlayer light={true} width={340} height={190} url='https://youtu.be/qpcIqmO6H34'/></div>
                
                <h3 style={{marginTop:'5%',marginLeft:'70%'}}>view more work <FaArrowRight size="1.2rem" /></h3> */}
            </div>
        </div>
        
    );
};
export default OurWork;