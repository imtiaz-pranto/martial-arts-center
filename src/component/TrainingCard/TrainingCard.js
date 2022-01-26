import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './TrainingCard.css';

const TrainingCard = (props) => {

    const { title, img, description, fee, category, trainer } = props.training;


    return (
        <div>

            <Card className="training-card-container">
                <Card.Img variant="top" className="card-image" src={img} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text className="card-text-style">Trainer: {trainer}</Card.Text>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Text className="card-text-style">Category: {category}</Card.Text>
                    <Card.Text className="card-text-style">Training Fee: BDT {fee}</Card.Text>

                </Card.Body>
                <Card.Footer className="card-footer">
                    <Button className="enroll-btn">Enroll Now</Button>
                    <Button className="enroll-btn view">View Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TrainingCard;