import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button, Col, Image, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './NSI_HomeBanner.css'

export const NSIHomeBanner = ({ registerUser, getUser, user, token }) => {
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
        if (userData.username) {
            registerUser(userData)
            getUser(user, token)
            // setTimeout(setState({ isSubmitted: true }), 9000)
        }
    }

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }

    return (
        <React.Fragment>
            <div className="nsi-banner">

                <div className="nsi-banner-content">
                    <div className="nsi-join"><h1><span className="jbg-text">Join Biking groups</span></h1> <div><h1><span className="jbg-text-2">in you area</span></h1></div>

                        <div>

                            <Popup id="popup" trigger={<Button className="bg-btn" variant="primary">Join</Button>} modal>
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
                                        <Link to={`/${userData.username}`}>
                                            <Button variant="primary" type="submit" >
                                                Submit
                            </Button>
                                        </Link>
                                    </Form>
                                )}
                            </Popup>
                        </div>
                    </div>
                    {/*<div className="nsi-banner-pic">
            <img src="https://picsum.photos/171/180" alt="profileImage" />
            </div>*/}
                </div>




            </div>
        </React.Fragment>
    )

}