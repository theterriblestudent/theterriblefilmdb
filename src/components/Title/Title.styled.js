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
    font-family: ${props => props.theme.fontStacks.primaryFontStack};
    div {
        width: 5px;
        height: 30px;
        background-color: ${props => props.theme.colors.clrAccent};
        margin-right: 15px;
        border-radius: 2px;
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            display: none;
        }
    }
    h1 {
        color: ${props => props.theme.colors.textLight};
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 1.0909090909090908rem + 1.4545454545454546vw, 2rem);
        transition: color 0.5s;
        cursor: pointer;
        &:hover {color: ${props => props.theme.colors.clrAccent};}
    }
`;

export const StyledChev = styled(BiChevronRight)`
    font-size: 2rem;
    font-size: clamp(2rem, 1.4754098360655736rem + 1.092896174863388vw, 2.5rem);
    color: ${props => props.theme.colors.clrAccent};
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
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
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    color: ${props => props.theme.colors.clrAccent};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    @media only screen and (min-width: ${props => props.theme.breakPoints.tablet}) {
        display: none;
    } 
`;