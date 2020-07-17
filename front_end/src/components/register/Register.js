import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button,Image,Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './Register.css';

import API from '../../utils/api'


export const Register = () => {
    const [userData, setState] = useState({
        username: '',
        email: '',
        image: '',
        password: '',
        passwordConfirmation: '',
        error: [],
        isSubmitted: false
    })

    useEffect(() => {

        API.getUserInfo('Marcel')
        API.createUser({
            username: "Testname",
            password: "testname",
            email: 'testname@gmail.com'
        })
        API.putUserImage()
        // API.deleteUser()
    }, [])

    const handleLogin = (event) => {
        // May have to prevent the default depending on how this loads
        // event.preventDefault()
        console.log('Sign In')
        setState()
    }

    return (
        <Popup id="popup"  trigger={<Button variant="link">Register</Button>} modal>
            {close => (
                <Form id="form" onSubmit={handleLogin}>
                    
                    <Col className="form-logo" xs={6} md={4}>
                    <Image  src={cyclelogo2} alt="logo"  />
                  </Col>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className="form-table">Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="validationCustomUsername">
                    <Form.Label className="form-table"> Display Name</Form.Label>
                        <Form.Control required type="text" placeholder="Display Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-table">Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className="form-table">Confirm Password</Form.Label>
                        <Form.Control required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Save Password" /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>

                </Form>
            )}
            {/* TODO: If form filled, redirect to HomeSignedIn */}
            {/* {userRegister.isSubmitted ? <Redirect to="/" /> : null} */}
        </Popup>
    )
}