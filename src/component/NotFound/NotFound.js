import React from 'react';
import img from '../../images/not-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div >
                <h2 className="not-found">404: Page Not Found</h2>
                <p className="not-found">You may go wrong page rote! Try Again!!</p>
            </div>
            <div className="img-section">
                <img className="not-found-img" src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;