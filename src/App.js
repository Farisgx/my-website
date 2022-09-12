import './App.css';
import React, { useEffect } from 'react';
import Navbar from './componets/Navbar.js'
import vediovg  from './assets/rre.mp4'
import Ourclients from './componets/Ourclients'
import OurWork from './componets/Ourwork';
import Body from './componets/Body';
import Getintouch from './componets/Getintouch';
import Aos from "aos";
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
    <div className="App" id='home'>

      <video src={vediovg} autoPlay loop muted></video>
      
      <div className='solgun' >
        <h1>See life through </h1>
        <h1>a professional lens.</h1>
        <h2>a</h2>
        <h2>a</h2>
        <h2></h2>
        <h2></h2>
      </div>
     <div className='app_navbar-bottom'/>
     <div className='template'>
      <Ourclients id='ourclients'/>
      <div className='vl' style={{marginTop:'16%'}}></div>
      <OurWork id='ourwork'/>
      <div className='vl' style={{marginTop:'56%'}}></div>
      <Body />
      <div id='aboutus' className='vl' style={{marginTop:'80%',marginLeft:'20%'}}></div>
      <div className='vl' style={{marginTop:'80%',marginLeft:'-20%'}}></div>

      
      </div>
    
      <div id='contactus' className='app_navbar-bottom3'>
          <Getintouch id='contactus'/>
      </div>
      <Navbar/>

    

    </div>
    </div>
  );
}

export default App;
