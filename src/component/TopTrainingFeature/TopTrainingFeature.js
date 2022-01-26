import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, } from 'react-bootstrap';
import './TopTrainingFeature.css';

const TopTrainingFeature = (props) => {

    const { title, img, description, fee, category } = props.topTraining;
    // console.log(props.topTraining);

    return (
        <div>
            <Card>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body className="top-card-body">
                    <Card.Title>{title}</Card.Title>
                    
                    <Card.Text className="card-text">{description}</Card.Text>
                    <p className="card-text-style">Category: {category}</p>
                    {/* <Card.Text className="card-text-style">Category: {category}</Card.Text> */}
                    <Card.Text className="card-text-style">Training Fee: {fee}</Card.Text>
                </Card.Body>
                <Card.Footer className="top-card-footer">
                    <Button className="view-button">View Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TopTrainingFeature;