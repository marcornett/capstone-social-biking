import React from "react"
import { EventList } from '../components/event-list'
import { GroupBanner } from '../components/group-banner'


// Example
// import {Navbar} from "../components" 

export const GroupPage = () => (
    <div className="group">
        <GroupBanner />
        <EventList />
       
    </div>
)