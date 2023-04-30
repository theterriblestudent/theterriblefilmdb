import styled from 'styled-components';

export const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const BackgroundImage = styled.picture`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}){
            object-position: top;
        }
    }
`;
