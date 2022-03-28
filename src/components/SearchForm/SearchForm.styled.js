import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 35px;
    border: 2px solid ${props => props.theme.colors.clrAccent};
    border-radius: 100px;
    padding: 3px 2px 3px 5px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: ${props => (props.mobile ? "flex" : "none")};
    }
`;

export const StyledInput = styled.input.attrs({type: "text", placeholder: "search movies and tv"})`
    border: none;
    outline: none;
    color: ${props => props.theme.colors.textLight};
    height: 100%;
    flex: 1;
    border-radius: 100px;
    padding: 0 5px;
    background: transparent;
`

export const StyledSearchButton = styled.div`
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: ${props => props.theme.colors.bgDark};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledSearchIcon = styled(FaSearch)`
    font-size: 0.85rem;
    color: ${props => props.theme.colors.clrAccent};
`;