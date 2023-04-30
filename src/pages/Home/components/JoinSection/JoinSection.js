import React from 'react';
import { join_section_bg } from 'assets';
import { BackgroundOverlay, JoinSectionContainer, JoinText, StyledJoinSection } from './JoinSection.styled';
import { StyledButton } from 'components';
import { useTheme } from 'styled-components';


function JoinSection() {
    const theme = useTheme();
  return (
      <StyledJoinSection>
          <img src={join_section_bg} alt="Join Section Background" />
          <BackgroundOverlay />
          <JoinSectionContainer>
              <JoinText>
                  <h1>Join Today</h1>
                  <p>
                    Get access to maintain your own custom personal lists, track what you've
                    seen and search and filter for what to watch next—regardless if it's in theatres,
                    on TV or available on popular streaming services like Netflix, Amazon Prime Video,
                    ShowMax, and Mubi.
                  </p>
                  <StyledButton as="a" href="#" btnColor={theme.colors.accent}>Join</StyledButton>
              </JoinText>
              <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
          </JoinSectionContainer>
      </StyledJoinSection>
  )
}

export default JoinSection
