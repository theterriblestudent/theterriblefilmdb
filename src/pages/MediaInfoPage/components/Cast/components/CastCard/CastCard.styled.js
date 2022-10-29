import styled from 'styled-components';

export const StyledCastCard = styled.div`
    width: 130px;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: top;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    h4 {
        font-family: ${props => props.theme.fontStacks.primaryFontStack};
        color: ${props => props.theme.colors.textLight};
        font-size: 18px;
        text-align: start;

    }
    p {
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textDark};
        font-size: 18px;
        text-align: start;
    }
`;
