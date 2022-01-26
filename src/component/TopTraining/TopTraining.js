import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopTrainingFeature from '../TopTrainingFeature/TopTrainingFeature';
import './TopTraining.css';


const TopTraining = () => {

    const [topTrainings, setTopTrainings] = useState([]);

    useEffect(() => {
        fetch('./topTraining.JSON')
            .then(res => res.json())
            .then(data => setTopTrainings(data));
    }, []);

    return (
        <div>
            <h1 className="top-training">Our Top Training </h1>
            <CardGroup className="card-container">
                {
                    topTrainings.map(topTraining => <TopTrainingFeature key={topTraining.id}
                        topTraining={topTraining}></TopTrainingFeature>)
                }
            </CardGroup>
            <div className="explore">
                <h2 className="all-course">Explore More Training </h2>
                <Link to="/training"> <Button className="view-all">View All Course</Button></Link>
            </div>

        </div>
    );
};

export default TopTraining;