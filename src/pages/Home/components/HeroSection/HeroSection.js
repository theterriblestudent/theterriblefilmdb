import { StyledHeroSection, Background, HeroMovieInfo } from 'pages/Home/components';
import composeHooks from 'react-hooks-compose';
import useHeroSection from './useHeroSection';

function HeroSection({heroMovie}) {
    return (
        <StyledHeroSection>
            <Background heroMovie={heroMovie}/>
            <HeroMovieInfo heroMovie={heroMovie}/>
        </StyledHeroSection>
    );
}

export default composeHooks({useHeroSection})(HeroSection);