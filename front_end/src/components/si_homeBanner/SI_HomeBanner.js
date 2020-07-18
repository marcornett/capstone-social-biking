import React from 'react'
import Card from 'react-bootstrap/Card'


export const SIHomeBanner = () => {
    return (
        <div>
            <Card border="success" style={{ width: '40em' }}>
                <Card.Body>
                    <Card.Title> <strong>Find Groups Near You </strong></Card.Title>
                    <Card.Text>
                        Text can be removed, can add anything here button, etc
      </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}