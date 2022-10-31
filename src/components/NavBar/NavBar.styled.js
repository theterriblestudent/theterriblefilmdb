import styled from 'styled-components';
import {GoThreeBars} from 'react-icons/go';
import {Link} from 'react-router-dom';

export const StyledNav = styled.nav`
    position: fixed;
    width: 100vw;
    padding: 25px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    transition: background 0.5s;
`;

export const StyledLogo = styled.img`
    width: clamp(150px, 10.42vw, 200px);
    height: auto;
    margin-right: 35px;
    cursor: pointer;
`;

export const StyledNavLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 32px;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
    flex: 1;
    height: 100%;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {display: none}
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.textLight};
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    text-decoration: none;
    transition: color 0.5s;
    font-weight: 600;
    font-size: 1.1875rem;
    &:hover {color: ${props => props.theme.colors.clrAccent}}
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        text-transform: uppercase;
    }
`;

export const StyledMobileNav = styled.ul.attrs({className: "mobile-nav"})`
    width: 60vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    transition: right 0.55s;
    transition-timing-function: ease-in-out;
    background-color: ${props => props.theme.colors.bgDark};
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: flex;
    }
`;

export const StyledBars = styled(GoThreeBars)`
    color: ${props => props.theme.colors.clrAccent};
    font-size: 1.6rem;
    display: none;
    z-index: 3;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: block;
    }
`;