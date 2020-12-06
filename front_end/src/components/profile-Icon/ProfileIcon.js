/****I've commented out alot of the code  because im not sure where 
we going to allow the user to set their profile 
pic/iconand whatever image the user would like to use, 
there is also a test image link that gives an image. *****/

import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Popup from 'reactjs-popup'
import { Button, Alert } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import { useParams } from 'react-router-dom'
import "./ProfileIcon.css";
import { Loader } from "../loader/Loader"


const SetProfileIcon = ({
    username,
    email,
    groups
}) => {
    const user = {}
    const [picture, setImage] = useState({ image: null })

    // const { username } = useParams()

    const onProfileIconChange = (event) => {
        const TargetFile = event.target.files;
        console.log(TargetFile);
        setImage(() => ({ image: TargetFile[0] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("picture", picture.file)
        console.log(picture);
        // uploadUserImage(username, picture);
        alert("image successfully uploaded")
    };


    // when ready uncomment line 53
    const deleteConfirm = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            // deleteUser(username)
            //console.log("working")
        }

    }

    return (
        <Popup id="popup" trigger={<Container>
            <Row>
                <Col xs={3} md={2}>
                    {user.image ?
                        <Image className="profile-icon" src={user.userImage} roundedCircle />
                        : <Image src="https://picsum.photos/171/180" roundedCircle />}
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
                            {/* {username ? */}
                            <ListGroupItem variant="success">Username:{username}</ListGroupItem>
                            {/* : <Loader />} */}
                            <br />
                            {/* {email ? */}
                            <ListGroupItem variant="success">Email:{email}</ListGroupItem>
                            {/* : <Loader />} */}
                            <br />
                            <ListGroupItem>
                                <Card bg="success" style={{ width: '12rem' }}>
                                    <ListGroup variant="flush">
                                        <Button variant="danger"
                                            onClick={deleteConfirm}>
                                            Delete Account</Button>
                                    </ListGroup>
                                </Card>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    <hr />
                    <Form>
                        <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Upload Desired Image</Form.File.Label>
                                <Form.File.Input onChange={onProfileIconChange} />
                                <Button variant="danger"
                                    onClick={handleSubmit}
                                >Upload Image</Button>
                            </Form.File>
                        </div>
                    </Form>
                </div>

            )}
        </Popup>
    );
};

export default SetProfileIcon