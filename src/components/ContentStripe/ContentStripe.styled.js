import styled, {css} from 'styled-components';
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa';

export const StyledContentStripe = styled.div`
    position: relative;
    top: ${props => props.top};
    margin-bottom: clamp(2.35rem, 2.0196rem + 1.05714vw, 2.8125rem);
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        top: 0px;
    }
`;

export const StyledControlsContainer = styled.div`
    width: 100%;
    padding: auto 5%;
    position: relative;
    margin-top: clamp(0.3125rem, -0.7291666666666667rem + 3.3333333333333335vw, 1.5625rem);
`;

export const StyledContentStripeContainer = styled.div`
    width: calc(100% - 12px);
    margin: auto;
    padding: ${ props => !props.no_default_container ? "15px 5%" : "15px 0" };
    overflow-x: scroll;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-height: 180px;
    scroll-behavior: smooth;
    gap: ${props => props.card_gap || 'clamp(1rem, 0.1428571rem + 2.742857vw, 2.2rem)'};
    align-items: ${props => props.align || "flex-start"};
    &::-webkit-scrollbar {display: none;}
`;

export const ControlCommonStyles = css`
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.5094339622641506rem + 3.5220125786163536vw, 2.2rem);
    color: ${props => props.theme.colors.accent};
    transition: transform 0.5s;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    top: 50%;
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const LeftScrollButton = styled(FaChevronCircleLeft)`
    ${ControlCommonStyles};
    left: ${props => props.no_default_container ? '0' : '5%'};
    transform: translate(-20px, -50%);
    &:hover {transform: translate(-20px, -50%) scale(1.1)}
`;

export const RightScrollButton = styled(FaChevronCircleRight)`
    ${ControlCommonStyles};
    right: ${props => props.no_default_container ? '0' : '5%'};
    transform: translate(20px, -50%);
    &:hover {transform: translate(20px, -50%) scale(1.1)}
`;
