import styled from 'styled-components';

export const StyledMediaCard = styled.div`
    background-color: ${props => props.theme.colors.bgLight};
    border-radius: 5px;
    flex-basis: 360px;
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        flex-basis: 180px;
        background: transparent;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 5px 5px 0 0;
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            border-radius: 8px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        border: 2px solid ${props => props.theme.colors.bgLight};
        width: 105%;
        height: 105%;
        z-index: -1;

        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            display: none;
        }
    }
`;

export const StyledMediaInfo = styled.div `
    padding: 15px 20px 20px 20px;
    max-width: 360px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: none;
    }
`;


export const Title = styled.div `
    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1rem + 0.8000000000000002vw, 1.55rem);
    font-family: ${props => props.theme.fontStacks.primaryFontStack};
    margin-bottom: 10px;
    color: ${props => props.theme.colors.textLight};
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    width: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.5s;
    &:hover {
        color: ${props => props.theme.colors.clrAccent};
    }
`;

export const MobileReleaseDate = styled.h3`
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    color: ${props => props.theme.colors.textDark};
    font-size: 0.9rem;
    font-size: clamp(0.9rem, 0.8166666666666667rem + 0.2666666666666666vw, 1rem);
    font-weight: 500;
    display: none;
    margin-top: 10px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: block;
    }
    
`;

export const Genres = styled.div `
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    div {
        width: 5px;
        height: 5px;
        margin-top: 3px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.clrAccent};
    }
    p {
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textDark};
        font-size: 1rem;
        font-size: clamp(1rem, 0.9583333333333333rem + 0.13333333333333347vw, 1.05rem);
        font-weight: 500;
        
    }
`;


export const ReleaseDate = styled.p `
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    color: ${props => props.theme.colors.textDark};
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 20px;
`;


export const Buttons = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    button {flex: 1;}

`;