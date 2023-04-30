import React from 'react';
import {useTheme} from 'styled-components';
import { Title, StyledButton } from 'components';
import {StyledWatchlistSection, StyledWatchlistContainer, StyledLoginText} from './WatchlistSection.styled';

function WatchlistSection() {
    const theme = useTheme();
    return (
        <StyledWatchlistSection>
            <Title title="Your Watchlist" />
            <StyledWatchlistContainer>
                <StyledLoginText>
                    Please sign in to FilmDB to keep track of what you want to watch.
                </StyledLoginText>
                <StyledButton  btnColor={theme.colors.accent}>
                    Log In
                </StyledButton>
            </StyledWatchlistContainer>
        </StyledWatchlistSection>
    );
}

export default WatchlistSection
