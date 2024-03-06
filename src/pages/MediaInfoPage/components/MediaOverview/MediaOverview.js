import React from 'react';
import {BsPlusLg} from 'react-icons/bs';
import { getRealeaseYear, getRuntime } from 'utils';
import { useTheme } from 'styled-components';
import composeHooks from 'react-hooks-compose';
import { MEDIUM_POSTER } from 'utils/CONSTANTS';
import useMediaOverview from './useMediaOverview';
import { Credits } from './components';
import { BriefMovieInfo, Column, Row, StyledButton, StyledLoader } from 'components';
import { OverviewImage, StyledOverviewContainer, OverviewContent } from './MediaOverview.styled';
import { StyledSynopsis, StyledMediaInfo } from './MediaOverview.styled';


function MediaOverview({mediaInfo, ageRating, media_type, getDepartmentMembers}) {
    const theme = useTheme();
    return (
        <StyledOverviewContainer>
            <OverviewImage >
                {mediaInfo &&
                <>
                    <source media={`(min-width: ${theme.breakpoints.tablet})`}
                        srcSet={`https://image.tmdb.org/t/p/w1280${mediaInfo.backdrop_path}`} />
                    <source media={`(max-width: ${theme.breakpoints.tablet})`}
                        srcSet={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} />
                    <img alt={`Movie Poster.`}/>
                </>}
            </OverviewImage>
            <OverviewContent>
                {(!mediaInfo) ? <StyledLoader /> : (
                        <React.Fragment>
                            <img src={`${MEDIUM_POSTER}/${mediaInfo.poster_path}`} alt="Poster" />
                            <StyledMediaInfo>
                                <h1>{(mediaInfo.title) ? mediaInfo.title : mediaInfo.name }</h1>
                                <Row>
                                    <StyledButton btnColor={theme.colors.light_button} shrink>
                                        <BsPlusLg color={theme.colors.accent} />
                                        <p>Watchlist</p>
                                    </StyledButton>
                                    {
                                        (media_type === 'movie') ? <BriefMovieInfo rating={mediaInfo.vote_average}
                                        releaseYear={getRealeaseYear(mediaInfo.release_date)}
                                        runtime={getRuntime(mediaInfo.runtime)} PG={ageRating || 'NR'} /> :
                                        <BriefMovieInfo rating={mediaInfo.vote_average} releaseYear={getRealeaseYear(mediaInfo.first_air_date)}
                                        runtime={getRuntime(mediaInfo.episode_run_time[0])} PG={ageRating || 'NR'} />
                                    }
                                </Row>
                                <h2>Overview</h2>
                                <StyledSynopsis>
                                    {mediaInfo.overview}
                                </StyledSynopsis>
                                <Column gap="clamp(0.625rem, 0.179rem + 1.429vw, 1.25rem)">
                                    <Credits values={getDepartmentMembers("Writing")} value_key="Writer"/>
                                    <Credits value_key="Director" values={getDepartmentMembers('Directing')} />
                                </Column>
                            </StyledMediaInfo>
                        </React.Fragment>)}
            </OverviewContent>
        </StyledOverviewContainer>
    )
}

export default composeHooks({useMediaOverview})(MediaOverview);
