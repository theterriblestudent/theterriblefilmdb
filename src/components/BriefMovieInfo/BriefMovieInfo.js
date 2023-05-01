import {StyledBriefMovieInfo, StyledRating, StyledPG, StyledReleaseYear, StyledSeperator} from 'components';
import {StyledRuntime} from 'components';
import {AiFillStar} from 'react-icons/ai';
import { useTheme } from 'styled-components';

function BriefMovieInfo({ rating, releaseYear, runtime, PG}) {
    const theme = useTheme()
    return (
        <StyledBriefMovieInfo gap="clamp(0.313rem, -0.357rem + 2.143vw, 1.25rem)">
            <StyledRating>
                <AiFillStar size="1.8rem" color={theme.colors.accent} />
                <h4>{Math.round(rating * 10) / 10}</h4>
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
