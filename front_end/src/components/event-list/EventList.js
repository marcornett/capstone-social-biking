import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './EventList.css'

export const EventList = ({ groupData, eventList }) => {
    const { groupName } = useParams()

    useEffect(() => {
        // API call to get data works, need to be connected to DB
        // groupData(groupName.slice(1))
    }, [])
    return (
        <Card id="eventComponent">
            <Card.Header as="h5">Events</Card.Header>
            {eventList ? eventList.map((event, index) => {
                return (
                    <Card.Body key={index}>
                        <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                        <Card.Title>Event Name</Card.Title>
                        <hr />
                    </Card.Body>
                )
            }) : null}
        </Card>
    )
}