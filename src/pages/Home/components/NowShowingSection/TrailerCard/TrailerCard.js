import React from 'react';
import {useTheme} from 'styled-components';
import {no_backdrop_image, no_poster} from 'assets';
import {PlayButton, StyledTrailerCard, VideoDesctiption, VideoThumbnail, VideoTitle,} from './TrailerCard.styled';
import useTrailerCard from './useTrailerCard';

function TrailerCard({backdrop, poster, title, description="Trailer"}) {
  const {handleMouseOver} = useTrailerCard(`https://image.tmdb.org/t/p/w780${backdrop}`);
  const theme = useTheme();
  return (
        <StyledTrailerCard onMouseEnter={handleMouseOver}>
            <VideoThumbnail>
                <picture>
                  <source media={`(min-width: ${theme.breakPoints.tablet})`}
                          srcSet={backdrop ? `https://image.tmdb.org/t/p/w780${backdrop}` : no_backdrop_image} />
                  <source media={`(max-width: ${theme.breakPoints.tablet})`}
                          srcSet={poster ? `https://image.tmdb.org/t/p/w342${poster}` : no_poster} />
                  <img alt={`${title}`} />
                </picture>
                <PlayButton />
            </VideoThumbnail>
            <VideoTitle>{title}</VideoTitle>
            <VideoDesctiption>{description}</VideoDesctiption>
        </StyledTrailerCard>
  );
}

export default TrailerCard;