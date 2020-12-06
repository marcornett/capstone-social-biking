import React from 'react'
import { Card, Button, Container, Jumbotron } from 'react-bootstrap'
import bikeonwall from "../assets/bikeonwall.jpg"
import bikerw from "../assets/bikerw.jpg"
import cyclebreak from "../assets/cyclebreak.jpg"

import "./SI_HomeBanner.css"


export const SIHomeBanner = () => {
    return (
        <React.Fragment>
            <div className="si-banner">
                <div className="si-banner-content">
                    <h1 className="l-heading">
                        Join your next group
                    </h1>
                </div>

            </div>
        </React.Fragment>




        //     <div>
        //         <Card border="success" style={{ width: '40em' }}>
        //             <Card.Body>
        //                 <Card.Title> <strong>Find Groups Near You </strong></Card.Title>
        //                 <Card.Text>
        //                     Text can be removed, can add anything here button, etc
        //   </Card.Text>
        //             </Card.Body>
        //         </Card>
        //     </div>
    )
}