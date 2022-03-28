import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: ${props => props.large ? "11px 22px" : "8px 18px"};
    border-radius: ${props => props.outlined ? '100px' : '5px'};
    border: 2px solid ${props => props.btnColor};
    font-family: ${props => props.outlined ? props.theme.fontStacks.primaryFontStack : props.theme.fontStacks.secondaryFontStack};
    font-weight: 600;
    font-size: ${props => props.large ? "clamp(1rem, 0.8385rem + 0.7385vw, 1.3rem)" : "clamp(0.9rem, 0.8462rem + 0.2462vw, 1rem)"};
    color: ${props => props.outlined ? props.btnColor : props.theme.colors.textLight};
    background: ${props => props.outlined ? "transparent" : props.btnColor};   
    cursor: pointer;
    transition: transform 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    &:hover { transform: scale(0.95);}
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        padding: ${props => props.large ? " 8px 18px" : "6px 16px"};
    }
`;
