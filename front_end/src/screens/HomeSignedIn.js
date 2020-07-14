import React from "react"
import { GroupGrid } from '../components/group-grid'

import { NavigationBar } from "../components/navigationBar"



export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <GroupGrid />
        <FooterPage/>
    </div>
)