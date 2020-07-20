import React from "react"
import { GroupGridContainer } from '../components/group-grid'
import './Home.css'
import { NavigationBarContainer } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { NSI_HomeBannerContainer } from "../components/nsi_homeBanner"
import { MostRecentUsersContainer } from "../components/most-recent-users"
import { CreateAGroupContainer } from "../components/create-a-group"

export const HomeSignedOut = () => (
    <div className="home">
        <NavigationBarContainer />
        <NSI_HomeBannerContainer />
        <CreateAGroupContainer />
        <GroupGridContainer />
        <MostRecentUsersContainer />
        <FooterPage />
    </div>
)