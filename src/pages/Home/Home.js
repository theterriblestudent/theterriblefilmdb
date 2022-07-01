import React from 'react';
import {HeroSection, JoinSection, TrendingSection, UpcomingSection, WatchlistSection} from 'pages/Home/components';
import {NowShowingSection, TopRatedMoviesSection, TopRatedTVSection} from 'pages/Home/components';
import {PopularMoviesSection, PopularTVShowsSection /*, TopBoxOfficeSection */} from 'pages/Home/components';
import {PopularPeopleSection} from 'pages/Home/components';
import {Fragment} from 'react';

function Home () {
    return (
        <Fragment >
            <HeroSection />
            <TrendingSection />
            <UpcomingSection />
            <WatchlistSection />
            <NowShowingSection />
            <TopRatedMoviesSection />
            <TopRatedTVSection />
            <PopularMoviesSection />
            <PopularTVShowsSection />
            {/* <TopBoxOfficeSection /> */}
            <PopularPeopleSection />
            <JoinSection />
        </Fragment>
    );
}

export default Home;