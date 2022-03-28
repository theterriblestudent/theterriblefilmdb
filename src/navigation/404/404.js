import composeHooks from 'react-hooks-compose';
import {Styled404Page, Styled404Content, NavigationButtons, Big404Text} from 'navigation/404';
import {StyledButton, Container} from 'components';
import {FaArrowLeft} from 'react-icons/fa';
import {BiHome} from 'react-icons/bi';
import React from 'react';
import use404 from './use404';

function NotFound({goBack, goHome, theme}) {
    return(
        <Styled404Page>
            <Container sm>
                <Styled404Content>
                    <Big404Text>404</Big404Text>
                    <h1>The page you're looking for does not exist.</h1>
                    <p>Perhaps it was removed or moved to a different URL</p>
                    <NavigationButtons>
                        <StyledButton large btnColor={theme.colors.clrAccent} onClick={goBack}>
                            <FaArrowLeft color={theme.colors.textLight} />
                            Go Back
                        </StyledButton>
                        <StyledButton large btnColor={theme.colors.bgLight} onClick={goHome}>
                            <BiHome color={theme.colors.textLight} />
                            Home
                        </StyledButton>
                    </NavigationButtons>
                </Styled404Content>
            </Container>
        </Styled404Page>
    );
}

export default composeHooks({use404})(NotFound);