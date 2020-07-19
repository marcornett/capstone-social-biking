import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Container, Col, Card, Image, Button } from 'react-bootstrap'
import { Loader } from '../loader'
import './GroupBanner.css'

import api from '../../utils/api'

export const GroupBanner = ({ groupData, addToUserGroups, currentGroupName, location, about, image, user }) => {
  const { groupName } = useParams()
  useEffect(() => {
    // API call to get current group info
    // groupData(groupName.slice(1))
  }, [])

  const handleJoinGroup = (event) => {
    // API call to add yourself to the group
    // addToUserGroups('Testname1', groupName.slice(1))
  }

  return (
    <div className="groupBanner">
      <Container fluid>
        <Row>
          <Col md={true}>
            <Card>
              <Card.Header>{currentGroupName ? currentGroupName : <Loader />}</Card.Header>
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  {about ? about : <Loader />}
                </Card.Text>
                <Card.Title>Location</Card.Title>
                <Card.Text>
                  {location ? location : <Loader />}
                </Card.Text>
                <Button
                  className="button"
                  variant="primary"
                  onClick={handleJoinGroup}
                >Join</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>

            {image.length ? <Image src={image} rounded /> : <Loader />}

          </Col>
        </Row>
      </Container>

    </div>
  )
}