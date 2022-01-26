import Button from '@restart/ui/esm/Button';
import React from 'react';
import img from '../../images/about.png';
import './About.css';

const About = () => {

    return (
        <div>
            <div className="about-section">
                <div>
                    <img className="about-img" src={img} alt="" />
                </div>
                <div>
                    <h1 className="about-title">About Us</h1>
                    <p className="details-us">
                        Chinese Kung Fu and Wushu School is one of the best and leading Martial Arts training institute in Bangladesh. There are so many courses of different Kung Fu style. Basically, Traditional Kung Fu is our core subject. The founder and chief instructor is Ostad Abdullah Al Monsur.  <br /> <br /> He started learning Kung Fu from his child hood. He has a lot of achievement in his Martial Arts career. He knows many styles of Martial Arts including Sort Kung Fu, Animal Kung Fu, Drunken Kung Fu, Wing Chun Kung Fu, Tai chi, Jeet Kun Du, Street Fighting Etc.<br /> <br /> We bluster to be one of the top tier kung fu school in this part of world operated under close supervision of great martial artist Sifu Abdullah Al Monsur, International Kung Fu and Wushu Experts. <br /> <br /> While we give lesson to traditional Chinese Kung Fu, we provide some fitness training also like one or two km running, push up, chin up, back flip, side drop etc. However you can opt out these if you like to stay puritan. 

                    </p>
                    <Button className="about-us-btn">View More</Button>
                </div>
            </div>
            
        </div>
    );
};

export default About;