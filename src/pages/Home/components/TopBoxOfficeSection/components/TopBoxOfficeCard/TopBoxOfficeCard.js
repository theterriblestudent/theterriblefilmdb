import React from 'react';
import { no_poster } from 'assets';
import { StyledBoxOfficeCard, StyledGrossAmount, StyledGrossOverlay, StyledPositionNumber } from './TopBoxOfficeCard.styled'
import useTopBoxOfficeCard from './useTopBoxOfficeCard';


function TopBoxOfficeCard({id, position, gross, grossElement, thisCard}) {
    const {data} = useTopBoxOfficeCard(id);
  return (
      <StyledBoxOfficeCard ref={thisCard}>
          {
            data && (data.movie_results.length > 0) ? <img src={`https://image.tmdb.org/t/p/w342${data.movie_results[0].poster_path}`} alt="Movie Poster" /> :
              <img src={no_poster} alt="Movie Poster Not Found!" />
          }
          <StyledPositionNumber>
            <h1>{position}</h1>
          </StyledPositionNumber>
          <StyledGrossAmount ref={grossElement}>
              <StyledGrossOverlay />
              <p>{gross}</p>
          </StyledGrossAmount>
      </StyledBoxOfficeCard>
  );
}

export default TopBoxOfficeCard