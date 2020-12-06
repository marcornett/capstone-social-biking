import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './YourGroups.css'

export const YourGroups = ({ userGroups, getUser }) => {

    useEffect(() => {
        // API call to get data works, need to be connected to DB
        getUser()
    }, [])
    return (
        <div id="groupContent">
            <h5>Your Groups</h5>
            <section id="grid">
                {userGroups.length ? userGroups.map((userGroup, index) => {
                    return (
                        <div key={index} className="groupLink">
                            <Link to={`/group/:${userGroup.groupName}`}>
                                <img src={
                                    userGroup.image ?
                                        userGroup.image : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}
                                    alt="" />
                                <h6 id="groupTitle">{userGroup.groupName}</h6>
                            </Link>
                        </div>
                    )
                }) : "Join Some Groups"}
            </section>
        </div>
    )
}