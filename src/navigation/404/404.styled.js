import styled from 'styled-components';
import {HeroMovieButtons} from 'pages/Home/components';

export const Styled404Page = styled.main`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.dark_background};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Styled404Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    color: ${props =>props.theme.colors.light_text};

    h1 {
        font-family: ${props => props.theme.font_stacks.primary};
        font-size: 1.5625rem;
        font-size: clamp(1.5625rem, 0.7954545454545455rem + 2.727272727272727vw, 2.5rem);
    }

    p {
        font-family: ${props => props.theme.font_stacks.secondary};
        font-size: 1.125rem;
        font-size: clamp(1.125rem, 0.7670454545454546rem + 1.2727272727272727vw, 1.5625rem);
        color: ${props => props.theme.colors.dark_text};
    }
`;

export const Big404Text = styled.h2`
    font-weight: bolder;
    font-size: 6.25rem;
    font-size: clamp(6.25rem, 3.693181818181818rem + 9.090909090909092vw, 9.375rem);
    font-family: ${props => props.theme.font_stacks.primary};
`;


export const NavigationButtons = styled(HeroMovieButtons)``;
