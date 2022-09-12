import React from 'react';
import './app_navbar.css';
// import { MdOutlineRestaurantMenu } from '@react-icons/all-files/md/MdOutlineRestaurantMenu';
import  { AiOutlineMobile } from '@react-icons/all-files/ai/AiOutlineMobile'
import images from '../constants/images.js';
import {Link} from 'react-scroll';
// 'src/assets/Beyond Mars.otf'
// {images.gericht}

const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <div>
        
        <div className='app_navbar'>
            <div className='app_navbar-logo'>
                <div>{' '}</div>
                <div>{' '}</div>
                <img src={images.gericht} alt="app__logo" />
            </div>
            <ul className='app_navbar-links'>
                <li className='p__opensans'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-200}>Home</Link></li>
                <li className='p__opensans'><Link activeClass="active" to="ourclients" spy={true} smooth={true} offset={-200}>Our clients</Link></li>
                <li className='p__opensans'><Link activeClass="active" to="ourwork" spy={true} smooth={true} offset={-200}>Our Work</Link></li>
                <li className='p__opensans'><Link activeClass="active" to="aboutus"  spy={true} smooth={true} offset={-200}>About us</Link></li>
                <li className='p__opensans'><Link activeClass="active" to="contactus" spy={true} smooth={true} offset={-200}>Get in touch</Link></li>
            </ul>
            <ul className='app_navbar-links2'>
                <li className='p__opensans'> <AiOutlineMobile size="1.5rem" /></li>
                <div/>
                <li className='p__opensans'>+249901944704</li>
                <li/>
            </ul>
            <div className='app_navbar-bottom2  '>

            </div>
        </div>
        {/* <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
             //<MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} /> 
             <ul className="app__navbar-smallscreen_links">
        //     <li className='p__opensans'><a href='#home'>Home</a></li>
        //         <li className='p__opensans'><a href='#ABOUTUS'>About us</a></li>
        //         <li className='p__opensans'><a href='#WHATWEDO'>What We Do</a></li>
        //         <li className='p__opensans'><a href='#GETINTOUCH'>Get in touch</a></li>
        //     </ul>
        //   </div>
        )}
      </div> */}

        
        
        
        
        

        </div>
    );
};

export default Navbar;