import React from "react"
import { GroupGrid } from '../components/group-grid'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { YourGroups } from "../components/your-groups"

export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <YourGroups />
        <GroupGrid />
        <FooterPage />
    </div>
)