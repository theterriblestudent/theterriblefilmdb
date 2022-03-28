import styled from 'styled-components';

export const StyledHeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: gray;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        height: 60vh;
    }
`;