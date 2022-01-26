import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import TrainingCard from '../TrainingCard/TrainingCard';
import './Training.css';

const Training = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('./martialData.JSON')
            .then(res => res.json())
            .then(data => setTrainings(data));
    }, []);

    return (

        <div>
            <div>
                <h1 className="training-title">Available Martial Art Training</h1>
            </div>
            <CardGroup className="training-container">
                {
                    trainings.map(training => <TrainingCard key={training.id}
                        training={training}> </TrainingCard>)
                }
            </CardGroup>
        </div>
    );
};

export default Training;