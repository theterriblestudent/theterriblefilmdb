import React from 'react';
import {HeroSection, TrendingSection} from 'pages/Home/components';
import {Fragment} from 'react';

function Home () {
    return (
        <Fragment >
            <HeroSection />
            <TrendingSection />
        </Fragment>
    );
}

export default Home;