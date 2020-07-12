import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './EventList.css'

export const EventList = () => {

    return (
        <Card>
            <Card.Header as="h5">Events</Card.Header>
            {/* Map over events and populate card body */}
            {/* array.map(item => {}) */}
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur arcu enim, sed accumsan urna gravida at. Nulla semper nisi a justo auctor, at consequat dolor luctus. Aliquam sagittis massa ut tellus rutrum tincidunt ac vel arcu. Pellentesque mattis gravida mauris, id suscipit sapien sodales vitae. Vivamus porta erat sit amet semper aliquam. Vestibulum aliquet mollis ultricies.
                </Card.Text>
                <Button variant="primary">Go to event page</Button>
            </Card.Body>
        </Card>
    )
}