import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button,Col,Image, } from 'react-bootstrap'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './SignIn.css';


export const SignIn = () => {
    const [userSignIn, setState] = useState({
        username: '',
        password: ''
    })

    const handleLogin = (event) => {
        // May have to prevent the default depending on how this loads
        // event.preventDefault()
        console.log('Sign In')
        setState(userSignIn)
    }

    return (
        <Popup id="popup"  trigger={<Button variant="link">Sign In</Button>} modal>
            {close => (
                <Form id="form" onSubmit={handleLogin}>
                <Col className="form-logo" xs={6} md={4}>
                <Image  src={cyclelogo2} alt="logo"  />
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
    )
}