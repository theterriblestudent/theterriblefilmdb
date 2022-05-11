import React from 'react';
import {StyledContentStripe, Title, StyledControlsContainer,
    LeftScrollButton, RightScrollButton, StyledContentStripeContainer} from 'components';
import composeHooks from 'react-hooks-compose';
import useContentStripe from './useContentStripe';
    
function ContentStripe ({data, getTabs, titleText, scrollLeft, scrollRight, getContent, id, scrollableContainer, title, buttonsRef}){
    return (
        <StyledContentStripe>
            <Title buttonsRef={buttonsRef} title={title ? title : getTabs && getTabs()[0].title} titleText={titleText} getTabs={getTabs} hasMore />
            <StyledControlsContainer id={id}>
                <LeftScrollButton onClick={() => scrollLeft()} />
                <RightScrollButton onClick={() => scrollRight()} />
                <StyledContentStripeContainer ref={scrollableContainer}>
                    {getContent(data)}                    
                </StyledContentStripeContainer>       
            </StyledControlsContainer>
        </StyledContentStripe>
    );
};

export default composeHooks({ useContentStripe })( ContentStripe );