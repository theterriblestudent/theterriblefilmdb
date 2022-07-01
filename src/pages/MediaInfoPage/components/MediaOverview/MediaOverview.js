import React from 'react';
import useMediaOverview from './useMediaOverview';
import composeHooks from 'react-hooks-compose';
import {useTheme} from 'styled-components';
import {OverviewImage, StyledOverviewContainer, OverviewContent} from './MediaOverview.styled';

function MediaOverview({mediaInfo, getRatings}) {
    const theme = useTheme();

    return (
        <StyledOverviewContainer>
            <OverviewImage >
                {mediaInfo && 
                <>
                    <source media={`(min-width: ${theme.breakPoints.tablet})`}
                        srcSet={`https://image.tmdb.org/t/p/w1280${mediaInfo.backdrop_path}`} />
                    <source media={`(max-width: ${theme.breakPoints.tablet})`} 
                        srcSet={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} />
                    <img alt={`Movie Poster.`}/>
                </>}
            </OverviewImage>
            <OverviewContent>
                
            </OverviewContent>
        </StyledOverviewContainer>
    )
}

export default composeHooks({useMediaOverview})(MediaOverview);
