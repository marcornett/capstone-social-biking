import React from 'react';
import { EventListContainer } from '../components/event-list';
import { GroupBannerContainer } from '../components/group-banner';
import { NavigationBar } from '../components/navigationBar';
import { FooterPage } from "../components/footer"


export const GroupPage = () => (
  <div className='group'>
    <NavigationBar />
    <GroupBannerContainer />
    <EventListContainer />
    <FooterPage />
  </div>
);