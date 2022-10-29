import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 270px;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.clrAccent};
    border-radius: 8px;
    padding: 3px 3px 3px 5px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: ${props => (props.mobile ? "flex" : "none")};
    }
`;

export const StyledInput = styled.input.attrs({type: "text", placeholder: "Search movies and tv"})`
    border: none;
    outline: none;
    color: ${props => props.theme.colors.textLight};
    height: 100%;
    flex: 1;
    border-radius: 8px;
    padding: 0 5px;
    background: transparent;
`

export const StyledSearchButton = styled.div`
    width: 28px;
    height: 30px;
    border-radius: 6px;
    background: ${props => props.theme.colors.bgDark};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const StyledSearchIcon = styled(FaSearch)`
    font-size: 0.85rem;
    color: ${props => props.theme.colors.clrAccent};
`;