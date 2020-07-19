import React,{ useEffect } from 'react'
import { Image } from 'react-bootstrap'
import './MostRecentUsers.css'

export const MostRecentUsers =({users,getUsers}) =>{

  useEffect(() => {
    // API call to get data works, need to be connected to DB
    // getUsers()
}, [])

  return(
    <div id="userComponent">
      <div id="userHeader"><h5>New Members</h5></div>
       <div className="userCard">
          {users.map((user,index)=>(
             <div className="user" key={index}>
               <Image src={user.image ?user.image :
                  "https://forevermanchester.com/wp-content/uploads/2015/02/Bike.jpeg"
                  } alt="" roundedCircle />
               <p>{user.username}</p>
               </div>
          )).slice(-5)}
        </div>
    </div>
  )
}