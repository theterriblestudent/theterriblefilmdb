import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi';

export const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const StyledTitleText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: ${props => props.theme.font_stacks.primary};
    div {
        width: 5px;
        height: 30px;
        background-color: ${props => props.theme.colors.accent};
        margin-right: 15px;
        border-radius: 2px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
            display: none;
        }
    }
    h1 {
        color: ${props => props.theme.colors.light_text};
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
          color: #d1d1d1;
        }
        font-size: 1.4rem;
        font-size: clamp(1.4rem, 0.971rem + 1.371vw, 2rem);
        transition: color 0.5s;
        cursor: pointer;
        &:hover {color: ${props => props.theme.colors.accent};}
    }
`;

export const StyledChev = styled(BiChevronRight)`
    font-size: 2rem;
    font-size: clamp(2rem, 1.475rem + 1.093vw, 2.5rem);
    color: ${props => props.theme.colors.accent};
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const StyledTabButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    gap: 15px;
`;

export const SeeMoreButton = styled(Link)`
    font-family: ${props => props.theme.font_stacks.secondary};
    color: ${props => props.theme.colors.accent};
    font-size: 0.85rem;
    font-size: clamp(0.85rem, 0.743rem + 0.3429vw, 1rem);
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;
