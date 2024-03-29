import styled from 'styled-components';

export const StyledWatchlistSection = styled.div`
    margin-top: -135px;
    margin-bottom: 180px;
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 20px;
        margin-bottom: 30px;
        padding-top: 50px;
        background-color: #0c0c0c;
`;

export const StyledWatchlistContainer = styled.div`
    ${props => props.theme.containers.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5.625rem;
    padding-top: clamp(5.625rem, 4.285714285714286rem + 4.285714285714286vw, 7.5rem);
    padding-bottom: 5.625rem;
    padding-bottom: clamp(5.625rem, 4.285714285714286rem + 4.285714285714286vw, 7.5rem);
`;

export const StyledLoginText = styled.p`
    color: ${props => props.theme.colors.dark_text};
    font-family: ${props => props.theme.font_stacks.secondary};
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.22;
    font-size: 1.1rem;
    font-size: clamp(1.1rem, 0.9541666666666669rem + 0.4666666666666662vw, 1.275rem);
`;
