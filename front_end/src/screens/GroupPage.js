import React from 'react';
import { EventList } from '../components/event-list';
import { GroupBanner } from '../components/group-banner';
import { NavigationBar } from '../components/navigationBar';
import FooterPage from "../components/footer/Footer"


export const GroupPage = () => (
  <div className='group'>
  <NavigationBar/>
    <GroupBanner />
    <EventList />
    <FooterPage/>
  </div>
);
