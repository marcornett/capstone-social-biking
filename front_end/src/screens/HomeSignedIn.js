import React from "react"
import { GroupGrid } from '../components/group-grid'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { SIHomeBanner } from "../components/si_homeBanner"

export const HomeSignedIn = () => (
    <div className="home">
        <NavigationBar />
        <SIHomeBanner />
        <GroupGrid />
        <FooterPage />
    </div>
)