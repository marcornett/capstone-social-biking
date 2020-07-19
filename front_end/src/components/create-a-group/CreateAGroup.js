import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Form, Button,Col,Image, } from 'react-bootstrap'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './CreateAGroup.css';


export const CreateAGroup = () => {
    const [createTheGroup, setState] = useState({
        groupName: '',
        location: '',
        about:"",
        image:{}
    })

    const handleSubmission = (event) => {
        setState(createTheGroup)
    }

    return (
      <Popup id="popup"  trigger={<Button>Make a Group</Button>} modal>
      {close => (
          <Form id="form" onSubmit={handleSubmission}>
          <Col className="form-logo" xs={6} md={4}>
          <Image  src={cyclelogo2} alt="logo"  />
        </Col>
        <Form.Label><h4>Make A Group</h4></Form.Label>
              <Form.Group controlId="formBasicGroupName">
                  <Form.Control required type="text" placeholder="Enter Group Name" />
              </Form.Group>

              <Form.Group controlId="formBasicLocation">
                  <Form.Control required type="text" placeholder="Location (city ex:Indianaplis)" />
              </Form.Group>

              <Form.Group controlId="formBasicAbout">
                <Form.Control type="text" placeholder="Description of what this group is about" />
              </Form.Group>

              <Form.Group>
                <Form.File id="GroupImage" label="Upload Group Image" />
              </Form.Group>

              <Button variant="primary" type="submit" >
                  Submit
          </Button>
          </Form>


      )}
  </Popup>
    )
}