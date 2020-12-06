import React from 'react';
import { EventListContainer } from '../components/event-list';
import { GroupBannerContainer } from '../components/group-banner';
import { NavigationBarContainer } from '../components/navigationBar';
import { FooterPage } from "../components/footer"


export const GroupPage = () => (
  <div className='group'>
    <NavigationBarContainer />
    <GroupBannerContainer />
    <EventListContainer />
    <FooterPage />
  </div>
);