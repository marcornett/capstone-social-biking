import React from "react"
import { GroupGrid } from '../components/group-grid'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"

export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <GroupGrid />
        <FooterPage/>
    </div>
)