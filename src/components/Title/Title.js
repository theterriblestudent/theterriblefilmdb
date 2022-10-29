import React from "react";
import { Container, StyledTitle, StyledTitleText, StyledTabButtons, SeeMoreButton, StyledChev } from "components";
import {HOME} from 'navigation/CONSTANTS';

function Title ({small, title, getTabs, noBars, hasMore, titleText, buttonsRef, no_default_container}) {
    return(
        <React.Fragment>
            { !no_default_container && 
            <Container small={small}>
                <StyledTitle>
                    <StyledTitleText>
                        {!noBars && <div />}
                        <h1 ref={titleText}>{title}</h1>
                        {hasMore && <StyledChev />}
                    </StyledTitleText>
                    {getTabs && getTabs().length > 1 && <StyledTabButtons ref={buttonsRef}>
                        {getTabs().map(tab => tab.button)}
                    </StyledTabButtons>}
                    { hasMore && <SeeMoreButton to={HOME}> See all </SeeMoreButton> }
                </StyledTitle>
        </Container>}
        { no_default_container &&
            <StyledTitle>
                <StyledTitleText>
                    {!noBars && <div />}
                    <h1 ref={titleText}>{title}</h1>
                    {hasMore && <StyledChev />}
                </StyledTitleText>
                {getTabs && getTabs().length > 1 && <StyledTabButtons ref={buttonsRef}>
                    {getTabs().map(tab => tab.button)}
                </StyledTabButtons>}
                { hasMore && <SeeMoreButton to={HOME}> See all </SeeMoreButton> }
            </StyledTitle>
            }
        </React.Fragment>
    );
};

export default Title;