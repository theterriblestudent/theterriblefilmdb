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
            {heroMovie && <BriefMovieInfo releaseYear={heroMovie.releaseYear}
                            rating={heroMovie.score}
                            PG={heroMovie.rating}
                            runtime={heroMovie.runtime}/>}
            <HeroMovieButtons>
                <StyledButton large btnColor={theme.colors.clrAccent}>
                    <AiFillInfoCircle color={theme.colors.textLight} />
                    More Info
                </StyledButton>
                <StyledButton large btnColor={theme.colors.bgLight}>
                    <BsPlusLg color={theme.colors.clrAccent} />
                    Wishlist
                </StyledButton>
            </HeroMovieButtons>
        </StyledMovieInfo>
    );
}

export default HeroMovieInfo;