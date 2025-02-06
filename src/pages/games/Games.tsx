import React from 'react';
import styles from './Games.module.scss';
import { ContentSection, FooterContent, MarketsPart, Slider, UsersPart, VideoPlayer } from '@/components';

const VideosPage = () => {
  return (
   <>
   <VideoPlayer url='https://www.youtube.com/watch?v=dLRvYEv46F0&t=35s'/>
    <UsersPart/>
    {/* <Slider/> */}
    <MarketsPart/>
    <ContentSection/>
   <VideoPlayer url='https://www.youtube.com/watch?v=KeRZ2ufx0tc'/>
   <FooterContent/>

    </>
  );
};

export default VideosPage;
