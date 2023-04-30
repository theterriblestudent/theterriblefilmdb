import {StyledMovieInfo, HeroMovieButtons} from 'pages/Home/components';
import {BriefMovieInfo, StyledButton} from 'components';
import { useTheme } from 'styled-components';
import {AiFillInfoCircle} from 'react-icons/ai';
import {BsPlusLg} from 'react-icons/bs';

function HeroMovieInfo({heroMovie}) {
    const theme = useTheme();
    return(
        <StyledMovieInfo>
            {heroMovie && <img src={heroMovie.logo} alt={`${heroMovie.title} logo`}/>}
            {heroMovie && (
                <BriefMovieInfo releaseYear={heroMovie.releaseYear}
                    rating={heroMovie.score} PG={heroMovie.rating} runtime={heroMovie.runtime}/>
                )}
            <HeroMovieButtons>
                <StyledButton large btnColor={theme.colors.accent}>
                    <AiFillInfoCircle color={theme.colors.light_text} />
                    More Info
                </StyledButton>
                <StyledButton large btnColor={theme.colors.light_background}>
                    <BsPlusLg color={theme.colors.accent} />
                    Watchlist
                </StyledButton>
            </HeroMovieButtons>
        </StyledMovieInfo>
    );
}

export default HeroMovieInfo;
