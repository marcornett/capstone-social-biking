import React from 'react'
import { Row, Container, Col, Card, Image, Button } from 'react-bootstrap'
import './NSI_HomeBanner.css'

export const NSIHomeBanner = () => {
    return (
        <div>
            <div className= "nsi-banner">
            <div className="nsi-content">
            <div className="nsi-join"><h1><span className="jbg-text">Join Biking groups</span></h1> <br></br> <div><h1><span className="jbg-text-2">in you area</span></h1></div>

            <div>
            <Button variant="primary">Join</Button>
            </div>
            </div>
            {/*<div className="nsi-banner-pic">
            <img src="https://picsum.photos/171/180" alt="profileImage" />
            </div>*/}
            </div>
                    
                    <hr />   
                </div>
            </div>

  

    )

}