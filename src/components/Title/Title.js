import { Container, StyledTitle, StyledTitleText, StyledTabButtons, SeeMoreButton, StyledChev } from "components";
import {HOME} from 'navigation/CONSTANTS';

function Title({small, title, getTabs, noBars, hasMore}){
    return(
        <Container small={small} >
            <StyledTitle>
                <StyledTitleText>
                    {!noBars && <div />}
                    <h1>{title}</h1>
                    {hasMore && <StyledChev />}
                </StyledTitleText>
                <StyledTabButtons>
                    {getTabs()}
                </StyledTabButtons>
                { hasMore && <SeeMoreButton to={HOME}> See all</SeeMoreButton> }
            </StyledTitle>
        </Container>
    );
};

export default Title;