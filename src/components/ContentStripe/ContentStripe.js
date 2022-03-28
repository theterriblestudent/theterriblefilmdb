import React from 'react';
import {StyledContentStripe, Title, StyledControlsContainer,
    LeftScrollButton, RightScrollButton, StyledContentStripeContainer} from 'components';
import composeHooks from 'react-hooks-compose';
import useContentStripe from './useContentStripe';
    
function ContentStripe ({getTabs, controlStyles, getContent, id}) {
    return (
        <StyledContentStripe>
            <Title title="Trending Today" getTabs={getTabs} hasMore />
            <StyledControlsContainer>
                <LeftScrollButton />
                <RightScrollButton />
                <StyledContentStripeContainer id={id}>
                    {getContent()}                    
                </StyledContentStripeContainer>       
            </StyledControlsContainer>
        </StyledContentStripe>
    );
};

export default composeHooks({ useContentStripe })( ContentStripe );