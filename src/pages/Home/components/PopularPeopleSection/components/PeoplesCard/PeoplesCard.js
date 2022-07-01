import React from 'react'
import {no_profile_image} from 'assets';
import { useFetchMedia } from 'hooks'
import { StyledPeoplesCard } from './PeoplesCard.styled'

function PeoplesCard({name, path, id}) {
    const data = useFetchMedia(`https://api.themoviedb.org/3/person/${id}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);
  return (
    <StyledPeoplesCard>
        <img src={path ? `https://image.tmdb.org/t/p/w185${path}`: no_profile_image} alt={`${name}'s profile`} />
        <p>{data && data.name}</p>
    </StyledPeoplesCard>
  )
}

export default PeoplesCard