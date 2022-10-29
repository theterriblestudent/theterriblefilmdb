import { StyledCastCard } from "./CastCard.styled";
import { no_profile_image } from 'assets';
import { MEDIUM_PFP } from 'utils/CONSTANTS';

function CastCard ({ profile_image, name, character }) {
    return(
        <StyledCastCard>
            <img src={profile_image ? `${MEDIUM_PFP}/${profile_image}` : no_profile_image} alt="Proflie"/>
            <h4>{name}</h4>
            <p>{character}</p>
        </StyledCastCard>
    );
}

export default CastCard;