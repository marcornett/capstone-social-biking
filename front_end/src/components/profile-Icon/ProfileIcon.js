/****I've commented out alot of the code  because im not sure where 
we going to allow the user to set their profile 
pic/iconand whatever image the user would like to use, 
there is also a test image link that gives an image. *****/

import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import "./ProfileIcon.css";


const SetProfileIcon = ({
    setPicture: setIcon,
    picture,
    loading,
    error,
}) => {
    // const [photo, setPhoto] = useState(null);

    // const onProfileIconChange = (event) => {
    //     const file = event.target.files[0];
    //     console.log(file);
    //     setPhoto(file);
    // }; // debugger;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setIcon(photo);
    //     console.log(photo);
    // };

    return (
        <Popup id="popup" trigger={<Container>
            <Row>
                <Col xs={3} md={2}>
                    <Image className="profile-icon" src="https://picsum.photos/171/180" roundedCircle />
                </Col>
            </Row>
        </Container>} modal>
            {close => (
                <div>
                    <Card border="dark" bg="success" style={{ width: '60rem' }}>
                        {/* <Card.Img variant="top" src={cyclelogo2} /> */}
                        <Card.Body>
                            <Card.Title>All About Me</Card.Title>
                        </Card.Body>
                        <ListGroup variant="flush" className="list-group-flush">
                            <ListGroupItem variant="success">Users Username here</ListGroupItem>
                            <br />
                            <ListGroupItem variant="success">Users Email here</ListGroupItem>
                            <br />
                            <ListGroupItem variant="success">Users Registered group here</ListGroupItem>
                            <br />
                            <ListGroupItem>
                                <Card bg="success" style={{ width: '12rem' }}>
                                    <ListGroup variant="flush">
                                        <Button variant="danger" onClick="" >Delete Account</Button>
                                    </ListGroup>
                                </Card>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    <hr />
                    <Form>
                        <div className="mb-3">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isValid />
                                <Form.File.Label data-browse="Button text">
                                    Update Profile Icon
                                            </Form.File.Label>
                                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                            </Form.File>
                        </div>
                        <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Upload Desired Image</Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                        </div>
                    </Form>
                </div>

            )}
        </Popup>
        // <div className="container">
        //     <div className="user-name">
        //         <b>Username</b>
        //         <i>
        //             <b>PlaceHolder</b>
        //         </i>
        //     </div>
        //     <div className="image-container">
        //         <img
        //             src={``}
        //             alt="Nothing Uploaded"
        //         />
        //     </div>
        //     <form className="container" onSubmit={handleSubmit}>
        //         <div className="display-name">
        //             <b>Display Name </b>
        //             <div>
        //                 <i>Could possibly be user display name</i>
        //             </div>
        //         </div>
        //         <input
        //             className="choose-photo-box"
        //             onChange={onProfileIconChange}
        //             name="picture"
        //             type="file"
        //             required
        //             autoFocus
        //         />
        //         <button className="upload-button" type="submit">
        //             Upload
        // </button>
        //         <p className=" photo-instructions">
        //             Click on the Profile link in the menu to view your uploaded photo{" "}
        //         </p>
        //     </form>


        // </div>



    );
};

export default SetProfileIcon