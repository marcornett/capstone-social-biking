import React from 'react';
import Spinner from 'react-bootstrap/Spinner'


export const Loader = () => {
    return (
        <>
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" size="sm" variant="info" />
            <Spinner animation="grow" variant="success" />
        </>
    )

}
