import React from "react"
import { GroupGrid } from '../components/group-grid'
 
import './Home.css'
import { NavigationBar } from "../components/navigationBar"
import FooterPage from "../components/footer/Footer"


export const HomeSignedOut = () => (
    <div className="home">
    <NavigationBar/>
        <GroupGrid />
        <FooterPage/>
    </div>
)