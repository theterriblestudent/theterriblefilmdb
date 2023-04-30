import styled from 'styled-components';

export const StyledCastCard = styled.div`
    width: 160px;
    border: 2px solid #3d3d3d;
    border-radius: 8px;
    padding-bottom: 15px;
    flex-shrink: 0;
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        width: 125px;
    }

    div {padding: 0 10px 0 10px;}

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: top;
        border-radius: 8px 8px 0 0;
        margin-bottom: 8px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        height: 135px;
        }
    }
    h4 {
        font-family: ${props => props.theme.font_stacks.primary};
        color: ${props => props.theme.colors.light_text};
        font-size: 0.9375rem;
        font-size: clamp(0.9375rem, 0.8482142857142857rem + 0.2857142857142857vw, 1.0625rem);
        text-align: start;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 5px;

    }
    p {
        font-family: ${props => props.theme.font_stacks.secondaryFontStack};
        color: ${props => props.theme.colors.dark_text};
        font-size: 0.875rem;
        font-size: clamp(0.875rem, 0.7857142857142857rem + 0.2857142857142857vw, 1rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;
    }
`;
