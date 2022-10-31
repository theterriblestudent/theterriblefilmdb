import React from 'react';
import composeHooks from 'react-hooks-compose';
import useRelatedMediaCard from './useRelatedMediaCard';
import { StyledRelatedMediaCard } from './RelatedMediacard.styled';

function RelatedMediaCard({ image, releaseDate, media_id, handleClick }) {
    return(
        <StyledRelatedMediaCard onClick={ () => handleClick(media_id)}>
            <img src={image} alt="Poster" />
            <p>{releaseDate}</p>
        </StyledRelatedMediaCard>
    );
}

export default composeHooks({useRelatedMediaCard})(RelatedMediaCard);