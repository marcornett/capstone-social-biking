import React from 'react'
import { Image } from 'react-bootstrap'
import './MostRecentUsers.css'

export const MostRecentUsers =({users}) =>{
  const testUsers=[
    {"username":"Tim"},
    {"username":"bill"},
    {"username":"tom"},
    {"username":"jim"},
    {"username":"john"},
    {"username":"megan"},
    {"username":"morgan"},
    {"username":"matt"},
  ]

  return(
    <div id="userComponent">
      <div id="userHeader"><h5>New Members</h5></div>
       <div className="userCard">
          {testUsers.map((user,index)=>(
             <div className="user" key={index}>
               <Image src="https://www.sundaybikes.com/wp-content/uploads/2014/07/bmx-bike-sunday-bikes-primer-16-21.jpg" roundedCircle />
               <p>{user.username}</p>
               </div>
          )).slice(-5)}
        </div>
    </div>
  )
}