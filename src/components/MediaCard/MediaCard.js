import composeHooks from 'react-hooks-compose';
import useMediaCard from './useMediaCard';
import { getReleaseDate } from 'utils';
import {useTheme} from 'styled-components';
import {no_backdrop_image, no_poster} from 'assets';
import {StyledButton} from 'components';
import {AiFillInfoCircle} from 'react-icons/ai';
import {BsPlusLg} from 'react-icons/bs';
import {ReleaseDate, Buttons, Genres} from './MediaCard.styled';
import {StyledMediaCard, StyledMediaInfo, Title} from './MediaCard.styled';

function MediaCard(props) {
    const theme = useTheme();
    return (
        <StyledMediaCard>
            <picture>
                <source media={`(min-width: ${theme.breakPoints.tablet})`}
                        srcSet={props.backdrop_image ? `https://image.tmdb.org/t/p/w780${props.backdrop_image}` : no_backdrop_image}/>
                <source media={`(max-width: ${theme.breakPoints.tablet})`}
                        srcSet={props.poster ? `https://image.tmdb.org/t/p/w342${props.poster}` : no_poster}/>
                <img alt={"movie-poster"}/>
            </picture>
            <StyledMediaInfo>
                <Title>{props.title}</Title>
                <Genres>{props.getGenres()}</Genres>
                <ReleaseDate>{getReleaseDate(props.release_date)}</ReleaseDate>
                <Buttons>
                    <StyledButton color={theme.colors.lightButton}>
                        <BsPlusLg color={theme.colors.clrAccent} /> Watchlist
                    </StyledButton>
                    <StyledButton color={theme.colors.bgDark}>
                        <AiFillInfoCircle color={theme.colors.textLight} />  More Info
                    </StyledButton>
                </Buttons>
            </StyledMediaInfo>
        </StyledMediaCard>
    );
};

export default composeHooks(props => ({ useMediaCard: useMediaCard(props.media_id, props.media_type) })) (MediaCard);