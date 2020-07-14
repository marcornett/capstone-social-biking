import React from "react"
import { GroupGrid } from '../components/group-grid'
 
import './Home.css'
import { NavigationBar } from "../components/navigationBar"

export const HomeSignedOut = () => (
    <div className="home">
    <NavigationBar/>
        <GroupGrid />
        
    </div>
)