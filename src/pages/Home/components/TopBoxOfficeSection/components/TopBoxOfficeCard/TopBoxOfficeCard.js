import React from 'react'
import { StyledBoxOfficeCard, StyledGrossAmount, StyledGrossOverlay, StyledPositionNumber } from './TopBoxOfficeCard.styled'
import useTopBoxOfficeCard from './useTopBoxOfficeCard'


function TopBoxOfficeCard({id, position, gross, grossElement, thisCard}) {
    const {data} = useTopBoxOfficeCard(id);
  return (
      <StyledBoxOfficeCard ref={thisCard}>
          { data && <img src={`https://image.tmdb.org/t/p/w342${data.movie_results[0].poster_path}`} alt="Movie Poster" /> }
          <StyledPositionNumber>
            <h1>{position}</h1>
          </StyledPositionNumber>
          <StyledGrossAmount ref={grossElement}>
              <StyledGrossOverlay />
              <p>{gross}</p>
          </StyledGrossAmount>
      </StyledBoxOfficeCard>
  )
}

export default TopBoxOfficeCard