import React from 'react'
import { Link } from 'react-router-dom'
import './GroupGrid.css'

export const GroupGrid = () => {

    return (
        <div id="groupContent">
            <h5>Groups Near You</h5>
            <section id="grid">
                <div className="column">
                    <Link to="/group/:testGroup1">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup2">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup3">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                </div>
                <div className="column">
                    <Link to="/group/:testGroup4">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup5">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup6">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                </div>
                <div className="column">
                    <Link to="/group/:testGroup7">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup8">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                    <Link to="/group/:testGroup9">
                        <img src="https://i.ytimg.com/vi/FpGGIA2j0c4/maxresdefault.jpg" alt="" />
                    </Link>
                </div>
            </section>
        </div>
    )
}