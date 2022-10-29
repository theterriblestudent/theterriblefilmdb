import React from 'react';
import { StyledRelatedMediaCard } from './RelatedMediacard.styled';

function RelatedMediaCard({ image, releaseDate }) {
    return(
        <StyledRelatedMediaCard>
            <img src={image} alt="Poster" />
            <p>{releaseDate}</p>
        </StyledRelatedMediaCard>
    );
}

export default RelatedMediaCard;