import React from 'react';
import {StyledContentStripe, Title, StyledControlsContainer,
    LeftScrollButton, RightScrollButton, StyledContentStripeContainer} from 'components';
import composeHooks from 'react-hooks-compose';
import useContentStripe from './useContentStripe';

function ContentStripe (props){
    return (
        <StyledContentStripe top={props.top || '0px'}>
            <Title no_default_container={props.no_default_container} buttonsRef={props.buttonsRef} title={props.title ? props.title : props.getTabs && props.getTabs()[0].title} titleText={props.titleText} getTabs={props.getTabs} hasMore />
            <StyledControlsContainer id={props.id}>
                <LeftScrollButton no_default_container={props.no_default_container} onClick={() => props.scrollLeft()} />
                <RightScrollButton no_default_container={props.no_default_container} onClick={() => props.scrollRight()} />
                <StyledContentStripeContainer align={props.align} card_gap={props.card_gap} no_default_container={props.no_default_container} ref={props.scrollableContainer}>
                    {props.getContent(props.data)}
                </StyledContentStripeContainer>
            </StyledControlsContainer>
        </StyledContentStripe>
    );
};

export default composeHooks({ useContentStripe })( ContentStripe );
