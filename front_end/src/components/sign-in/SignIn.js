import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button } from 'react-bootstrap'
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
        <Popup id="popup" trigger={<Button variant="link">Sign In</Button>} modal>
            {close => (
                <Form id="form" onSubmit={handleLogin}>
                    <h2 id="logo">Logo</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                  </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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