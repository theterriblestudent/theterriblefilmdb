import React from 'react'
import {no_backdrop_image} from 'assets';
import {PlayButton, StyledTrailerCard, VideoDesctiption, VideoThumbnail, VideoTitle,} from './TrailerCard.styled';
import useTrailerCard from './useTrailerCard';

function TrailerCard({thumbnail, title, description="Trailer"}) {
  const {handleMouseOver} = useTrailerCard(`https://image.tmdb.org/t/p/w780${thumbnail}`);
  return (
        <StyledTrailerCard onMouseEnter={handleMouseOver}>
            <VideoThumbnail>
                <img src={thumbnail ? `https://image.tmdb.org/t/p/w780${thumbnail}` : no_backdrop_image} alt="Video Thumbnail" />
                <PlayButton />
            </VideoThumbnail>
            <VideoTitle>{title}</VideoTitle>
            <VideoDesctiption>{description}</VideoDesctiption>
        </StyledTrailerCard>
  );
}

export default TrailerCard;