/****I've commented out alot of the code  because im not sure where 
we going to allow the user to set their profile 
pic/iconand whatever image the user would like to use, 
there is also a test image link that gives an image. *****/

import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./ProfileIcon.css";
import Popup from 'reactjs-popup'
import { Form, Button, } from 'react-bootstrap'
import cyclelogo2 from "../assets/cyclelogo2.png"


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

    // TODO: need to add things that user can change so change up form to make sense for profile icon
    //TODO: email, username, groups, put image button, delete image button, delete user button
    return (
        <Popup id="popup" trigger={<Container>
            <Row>
                <Col xs={3} md={2}>
                    <Image className="profile-icon" src="https://picsum.photos/171/180" roundedCircle />
                </Col>
            </Row>
        </Container>} modal>
            {close => (
                <Form id="form" onSubmit="">
                    <Col className="form-logo" xs={6} md={4}>
                        <Image src={cyclelogo2} alt="logo" />
                    </Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Save Password" /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
            </Button>
                </Form>


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