import React from "react"
import { GroupGridContainer } from '../components/group-grid'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { SIHomeBanner } from "../components/si_homeBanner"
import { YourGroupsContainer } from "../components/your-groups"
import { MostRecentUsersContainer } from "../components/most-recent-users"


export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <SIHomeBanner />
        <YourGroupsContainer />
        <GroupGridContainer />
        <MostRecentUsersContainer />
        <FooterPage />
    </div>
)