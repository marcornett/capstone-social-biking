import React, { useState,useEffect } from 'react'
import Popup from 'reactjs-popup'
import {Link }from "react-router-dom"
import { Form, Button,Col,Image } from 'react-bootstrap'
import cyclelogo2 from "../assets/cyclelogo2.png"
import './CreateAGroup.css';


export const CreateAGroup = ({registerGroup}) => {
  const [image, setImage] = useState({image: null})
    const [createTheGroup, setState] = useState({
        groupName: "",
        location: "",
        about:"",
        eventList:""
    })



    const handleImageUpload=(event)=>{
      event.preventDefault();
      const data = new FormData();
      data.append("image", image.file)
      // console.log("uploaded",image)
      registerGroup(image)
      setImage(()=>({image:"null"}))
    }

    const handlePhotoChange = (event) => {
      let imageFile = event.target.files
      // console.log("onchange", imageFile)
      setImage(() => ({image: imageFile[0]}))  
    };    

    const handleChange=(event)=>{
      const inputName = event.target.name;
      const inputValue = event.target.value;
      setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    }

    const handleSubmission = (event) => {
      event.preventDefault();
      // console.log(createTheGroup)
      registerGroup(createTheGroup)
      setState(()=>({groupName: "",location: "", about:"", eventList:""}))
      alert('Thank You for Registering A Group')
    }

    useEffect(() => {
      // API call to get data works, need to be connected to DB

  }, [handleSubmission])

    return (
      <Popup id="popup"  trigger={<Button>Create a Group</Button>} modal>
      {close => (
        <div>
           <Form>
           <Col className="form-logo" xs={6} md={4}>
             <Image  src={cyclelogo2} alt="logo"  />
            </Col>
        <Form.Label><h4>Create A Group</h4></Form.Label>
            <Form.File id="GroupImage" 
                           name="file"
                           type="file"
                          onChange={handlePhotoChange}              
                          label="Upload Group Image" />
                <Button onClick={handleImageUpload}>upload image</Button>
            </Form>
          <Form id="form" onSubmit={handleSubmission}>

              <Form.Group controlId="formBasicGroupName">
                  <Form.Control required type="text" 
                        name="groupName"
                        value={createTheGroup.groupName} 
                        onChange={handleChange} 
                        placeholder="Enter Group Name" 
                    />
              </Form.Group>

              <Form.Group controlId="formBasicLocation">
                  <Form.Control required type="text" 
                        name="location" 
                        value={createTheGroup.location} 
                        onChange={handleChange}
                        placeholder="Location (ex:Indianaplis)" 
                        />
              </Form.Group>

              <Form.Group controlId="formBasicAbout">
                <Form.Control type="text" 
                        name="about" 
                        value={createTheGroup.about} 
                        onChange={handleChange}
                        placeholder="Description of what this group is about" />
              </Form.Group>
              <Button variant="primary" type="submit" >
                  Submit
              </Button>
          </Form>

          </div>
      )}
  </Popup>
    )
}