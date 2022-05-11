import styled from 'styled-components';

export const StyledMovieInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-70%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(280px, 25vw,480px);
    justify-content: center;
    gap: clamp(0.3125rem, -0.0240rem + 1.5385vw, 0.9375rem);
    margin-left: 5%;

    img { width: 100%;}

    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        top: unset;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 0;
    }
`;

export const HeroMovieButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: clamp(0.625rem, 0.2885rem + 1.5385vw, 1.25rem);
    margin-top: clamp(0.625rem, 0.4567rem + 0.7692vw, 0.9375rem);
`;