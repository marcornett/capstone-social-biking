import React from 'react'
import { Link } from 'react-router-dom'
import './YourGroups.css'

export const YourGroups = () => {

    return (
        <div id="groupContent">
            <h5>Your Groups</h5>
            <section id="grid">
                {/* {array.forEach(group => { */}
                {/*  TODO: Get current user groups */}
                <div className="column">
                    <Link to="/group/:testGroup1">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                </div>
                {/* })} */}
            </section>
        </div>
    )
}