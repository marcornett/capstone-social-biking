import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button, Image, Col } from 'react-bootstrap'
import { useParams, Link, Redirect } from 'react-router-dom'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './Register.css';

export const Register = ({ registerUser, getUser, user, token }) => {
    const [userData, setState] = useState({
        username: '',
        email: '',
        image: '',
        password: '',
        passwordConfirmation: '',
        error: [],
        isSubmitted: false
    })

    const handleLogin = (event) => {
        // May have to prevent the default depending on how this loads
        event.preventDefault()

        registerUser(userData)
        getUser(userData.username, token)
        console.log(user)
        setTimeout(setState({ isSubmitted: true }), 9000)
    }

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }

    return (
        <>
            <Popup id="popup" trigger={<Button variant="link">Register</Button>} modal>
                {close => (
                    <Form id="form" onSubmit={handleLogin}>

                        <Col className="form-logo" xs={6} md={4}>
                            <Image src={cyclelogo2} alt="logo" />
                        </Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-table">Email address</Form.Label>
                            <Form.Control required
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label className="form-table"> Username</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="form-table">Password</Form.Label>
                            <Form.Control required
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="form-table">Confirm Password</Form.Label>
                            <Form.Control required
                                type="password"
                                placeholder="Confirm Password"
                                name="passwordConfirmation"
                                value={userData.passwordConfirmation}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Save Password" /> */}
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                            </Button>
                        {userData.isSubmitted ?
                            <Link to={`/${user}`} >
                                Go to sign in
                            </Link>
                            : null}
                    </Form>
                )}
            </Popup>
            {user ? <Redirect to={`/${user}`} /> : null}
        </>
    )
}