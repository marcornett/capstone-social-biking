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

        <Container>
            <Row>
                <Col xs={3} md={2}>
                    <Image className="profile-icon" src="https://picsum.photos/171/180" roundedCircle />
                </Col>
            </Row>
        </Container>
        // </div>


    );
};

export default SetProfileIcon