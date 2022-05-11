import React from 'react';
import {HeroSection, TrendingSection, UpcomingSection, WatchlistSection} from 'pages/Home/components';
import {NowShowingSection} from 'pages/Home/components';
import {Fragment} from 'react';

function Home () {
    return (
        <Fragment >
            <HeroSection />
            <TrendingSection />
            <UpcomingSection />
            <WatchlistSection />
            <NowShowingSection />
        </Fragment>
    );
}

export default Home;