import React from "react";
import Card from 'react-bootstrap/Card';
import "./Box.css"



export default function ShoeItem({ shoe }) {

    return (

        <Card style={{ width: '18rem' }} key = {shoe.id} className="box1">
            <Card.Img variant="top" src={shoe.image} />
            <Card.Body>
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>{shoe.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}