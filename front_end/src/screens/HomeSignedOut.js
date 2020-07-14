import React from "react"
import { GroupGrid } from '../components/group-grid'
import './Home.css'
import { SI_HomeBanner } from "../components/si_homeBanner/SI_HomeBanner"

export const HomeSignedOut = () => (
    <div className="home">
        <GroupGrid />
    </div>
)