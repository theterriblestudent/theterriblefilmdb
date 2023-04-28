import React from 'react';
import {StyledContentStripe, Title, StyledControlsContainer,
    LeftScrollButton, RightScrollButton, StyledContentStripeContainer} from 'components';
import composeHooks from 'react-hooks-compose';
import useContentStripe from './useContentStripe';
    
function ContentStripe ({data, getTabs, titleText, scrollLeft, scrollRight, getContent, id, scrollableContainer, title, buttonsRef, top, no_default_container, align, card_gap}){
    return (
        <StyledContentStripe top={top || '0px'}>
            <Title no_default_container={no_default_container} buttonsRef={buttonsRef} title={title ? title : getTabs && getTabs()[0].title} titleText={titleText} getTabs={getTabs} hasMore />
            <StyledControlsContainer id={id}>
                <LeftScrollButton no_default_container={no_default_container} onClick={() => scrollLeft()} />
                <RightScrollButton no_default_container={no_default_container} onClick={() => scrollRight()} />
                <StyledContentStripeContainer align={align} card_gap={card_gap} no_default_container={no_default_container} ref={scrollableContainer}>
                    {getContent(data)}                    
                </StyledContentStripeContainer>       
            </StyledControlsContainer>
        </StyledContentStripe>
    );
};

export default composeHooks({ useContentStripe })( ContentStripe );