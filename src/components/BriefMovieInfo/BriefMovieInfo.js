import {StyledBriefMovieInfo, StyledRating, StyledPG, StyledReleaseYear, StyledSeperator} from 'components';
import {StyledRuntime} from 'components';
import {AiFillStar} from 'react-icons/ai';
import { useTheme } from 'styled-components';

function BriefMovieInfo({ rating, releaseYear, runtime, PG}) {
    const theme = useTheme()
    return (
        <StyledBriefMovieInfo gap="20px">
            <StyledRating>
                <AiFillStar size="1.8rem" color={theme.colors.clrAccent} />
                <h1>{rating}</h1>
            </StyledRating>
            <StyledSeperator />
            <StyledRuntime>{runtime}</StyledRuntime>
            <StyledSeperator />
            <StyledReleaseYear>{releaseYear}</StyledReleaseYear>
            <StyledSeperator />
            <StyledPG>{PG}</StyledPG>
        </StyledBriefMovieInfo>
    );
}

export default BriefMovieInfo;