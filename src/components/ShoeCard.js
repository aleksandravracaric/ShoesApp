import React from "react";
import Card from 'react-bootstrap/Card';
import "./Box.css";
import { useNavigate } from 'react-router-dom';




export default function ShoeCard({shoe}) {

    const navigate = useNavigate();

    const toDetailPage = () => {
        navigate('/shoe', { state: {shoe}});
    }

    return (
        <Card style={{ width: '18rem' }} key={shoe.id} className="box1" onClick={() => { toDetailPage() }}>
            <Card.Img variant="top" className="photoItem" src={shoe.image} />
            <Card.Body className="cardText">
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>${shoe.price}</Card.Text>
            </Card.Body>
        </Card>  
    )
}