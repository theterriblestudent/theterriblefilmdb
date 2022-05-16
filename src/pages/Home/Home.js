import React from 'react';
import {HeroSection, TrendingSection, UpcomingSection, WatchlistSection} from 'pages/Home/components';
import {NowShowingSection, TopRatedMoviesSection, TopRatedTVSection} from 'pages/Home/components';
import {PopularMoviesSection, PopularTVShowsSection} from 'pages/Home/components';
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
        </Fragment>
    );
}

export default Home;