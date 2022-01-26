import React from 'react';
import './Instructor.css';
import img from '../../images/trainer1.jpg'
import img2 from '../../images/trainer2.jpg'
import img3 from '../../images/trainer3.jpg'
import img4 from '../../images/trainer4.jpg'
import { Link } from 'react-router-dom';

const Instructor = () => {

    return (
        <div>
            <h1 className="trainer">Our Trainers</h1>

            {/* trainer card starts from here */}

            <div className="instructor-container">

                <div className="instructor">
                    <img className="img-style" src={img} alt="" />
                    <p className="name">Thomas Davidson</p>
                    <p className="position">Cheif Trainer</p>
                    <div className="icon">
                        <Link><i class="fab fa-facebook-square"></i></Link>
                        <Link><i class="fab fa-twitter-square"></i></Link>
                        <Link><i class="fab fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="instructor">
                    <img className="img-style" src={img2} alt="" />
                    <p className="name">Jacky Chan</p>
                    <p className="position">Physical Exerciser</p>
                    <div className="icon">
                        <Link><i class="fab fa-facebook-square"></i></Link>
                        <Link><i class="fab fa-twitter-square"></i></Link>
                        <Link><i class="fab fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="instructor">
                    <img className="img-style" src={img3} alt="" />
                    <p className="name">Theorn Cheong</p>
                    <p className="position">Kung Fu Master</p>
                    <div className="icon">
                        <Link><i class="fab fa-facebook-square"></i></Link>
                        <Link><i class="fab fa-twitter-square"></i></Link>
                        <Link><i class="fab fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="instructor">
                    <img className="img-style" src={img4} alt="" />
                    <div className="instructor-description">
                        <p className="name">Danny Ohmg</p>
                        <p className="position">Physical Exerciser</p>
                        <div className="icon">
                            <Link><i class="fab fa-facebook-square"></i></Link>
                            <Link><i class="fab fa-twitter-square"></i></Link>
                            <Link><i class="fab fa-linkedin"></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;