import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GroupGrid.css'
import api from '../../utils/api'

export const GroupGrid = ({ groups, getAllGroups }) => {
    useEffect(() => {
        // API call to get data works, need to be connected to DB
        // getAllGroups()
    }, [])

    return (
        <div id="groupContent">
            <h5>Groups Near You</h5>
            <section id="grid">
                {groups ? groups.map((group, index) => {
                    console.log(group)
                    return (index < 6 ?
                        <div key={index} className="groupLink">
                            <Link to={`/group/:${group.groupName}`}>
                                <img src={
                                    group.image ?
                                        group.image :
                                        "https://hongkongfixedgeargirl.files.wordpress.com/2012/02/eddy-thumb-500x353-29653_large.jpg"
                                } alt="" />
                                <h6 id="groupTitle">{group.groupName}</h6>
                            </Link>
                        </div>
                        : null)
                }) : null}
            </section>
        </div>
    )
}