import React from "react"
import { GroupGridContainer } from '../components/group-grid'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { SIHomeBanner } from "../components/si_homeBanner"
import { YourGroupsContainer } from "../components/your-groups"

export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <SIHomeBanner />
        <YourGroupsContainer />
        <GroupGridContainer />
        <FooterPage />
    </div>
)