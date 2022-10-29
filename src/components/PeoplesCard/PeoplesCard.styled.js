import styled from 'styled-components';

export const StyledPeoplesCard = styled.div`
    width: clamp(8.75rem, 7.447916666666666rem + 4.166666666666667vw, 10.3125rem);
    background-color: ${props => props.theme.colors.bgLight};
    border-radius: 8px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    img {
        width: 100%;
        aspect-ratio: 3 / 3.5;
        object-fit: cover;
        object-position: center;
        margin-bottom: 8px;
        border-radius: 8px 8px 0 0;
     }
    p {
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textLight};
        font-size: 1rem;
        font-size: clamp(1rem, 0.9166666666666666rem + 0.26666666666666694vw, 1.1rem);
        font-weight: 600;
        text-align: center;
        transition: color 0.5s;
        &:hover {color: ${props => props.theme.colors.clrAccent};}
    }
`;