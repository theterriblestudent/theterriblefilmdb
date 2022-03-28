import styled, {css} from 'styled-components';
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa';

export const StyledContentStripe = styled.div`
    position: relative;
    top: -150px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        top: 0;
    } 
`;

export const StyledControlsContainer = styled.div`
    width: 100%;
    padding: auto 5%;
    position: relative;
`;

export const StyledContentStripeContainer = styled.div`
    width: 100%;
    padding: 15px 5%;
    overflow-x: scroll;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-height: 180px;
    gap: 40px;
    align-items: flex-start;
    &::-webkit-scrollbar {display: none;}
`;

export const ControlCommonStyles = css`
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.5094339622641506rem + 3.5220125786163536vw, 2.2rem);
    color: ${props => props.theme.colors.clrAccent};
    transition: transform 0.5s;
    position: absolute;
    cursor: pointer;
    top: 50%;
`;

export const LeftScrollButton = styled(FaChevronCircleLeft)`
    ${ControlCommonStyles};
    left: 5%;
    transform: translate(-20px, -50%);
    &:hover {transform: translate(-20px, -50%) scale(1.1)}
`;

export const RightScrollButton = styled(FaChevronCircleRight)`
    ${ControlCommonStyles};
    right: 5%;
    transform: translate(20px, -50%);
    &:hover {transform: translate(20px, -50%) scale(1.1)}
`;