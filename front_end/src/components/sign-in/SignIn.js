import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button, Col, Image, } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './SignIn.css';


export const SignIn = ({ registerUser, getUser, user, token, login }) => {
    const [userSignIn, setState] = useState({
        username: '',
        password: '',
        authenticated: false
    })

    const handleLogin = (event) => {
        // May have to prevent the default depending on how this loads
        event.preventDefault()
        login(
            userSignIn.username,
            userSignIn.password
        )
        getUser(userSignIn.username, token)
    }

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }

    return (
        <Popup id="popup" trigger={<Button variant="link">Sign In</Button>} modal>
            {close => (
                <Form id="form" onSubmit={handleLogin}>
                    <Col className="form-logo" xs={6} md={4}>
                        <Image src={cyclelogo2} alt="logo" />
                    </Col>
                    <Form.Label><h4>Sign in</h4></Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control required
                            type="username"
                            placeholder="Enter username"
                            name="username"
                            onChange={handleChange}
                            value={userSignIn.username}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control required
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={userSignIn.password}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Save Password" /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                        </Button>
                    {user ? <Redirect to={`/${userSignIn.username}`} /> : null}
                </Form>


            )}
        </Popup>
    )
}