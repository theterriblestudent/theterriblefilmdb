import styled from 'styled-components';

export const StyledRelatedMediaCard = styled.div`
    width: 220px;
    height: auto;
    flex-shrink: 0;
    img {
        width: 100%;
        margin-bottom: 20px;
        border-radius: 5px;
    }
    p {
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textDark};
        font-size: 1rem;
    }
`;