import React from 'react'
import { Image } from 'react-bootstrap'
import './ListUsers.css'

export const ListUsers =() =>{
  return(
    <div>
      <div className="userContainer">
        <div classname="userImage">
        <Image src="https://www.sundaybikes.com/wp-content/uploads/2014/07/bmx-bike-sunday-bikes-primer-16-21.jpg" roundedCircle />
        </div>
        <p className="userName">
          Users username
        </p>
      </div>
    </div>
  )
}