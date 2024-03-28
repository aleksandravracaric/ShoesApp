/* Update ShowDetail component */
import React from "react";
import Card from 'react-bootstrap/Card';
import "./Box.css";
import ShoesHeader from "./ShoesHeader";
import { useLocation } from "react-router-dom";

export default function ShowDetail() {
    const location = useLocation();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ShoesHeader />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <Card style={{ width: '100%' }} key={location.state.shoe.id} className="box2">
                        <div className="row">
                            <div className="col-md-6">
                                <Card.Img variant="left" className="photo1" src={location.state.shoe.image} />
                            </div>
                            <div className="col-md-6">
                                <Card.Body className="text1">
                                    <Card.Title>{location.state.shoe.name}</Card.Title>
                                    <Card.Text>{location.state.shoe.price}</Card.Text>
                                    <Card.Text>{location.state.shoe.description}</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
