import styled from 'styled-components';

export const StyledBriefMovieInfo = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: center;
    gap: 15px;
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        gap: 10px;
    }
`;

export const StyledRating = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 5px;

    h4 {
        font-size: clamp(1.2rem, 0.9846rem + 0.9846vw, 1.6rem);
        color: ${props => props.theme.colors.textLight};
        cursor: default;
    }
`;

export const StyledPG = styled.p `
    padding: 5px;
    border: 2px solid ${props => props.theme.colors.textLight};
    border-radius: 5px;
    flex-shrink: 0;
    font-size: clamp(0.9rem, 0.792rem + 0.492vw, 1.1rem);
    color: ${props => props.theme.colors.textLight};
    cursor: default;        
`;

export const StyledSeperator = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.clrAccent};
    flex-shrink: 0;
`;

export const StyledReleaseYear = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: clamp(1.1rem, 0.9385rem + 0.7385vw, 1.4rem);
    cursor: default;
`;

export const StyledRuntime = styled(StyledReleaseYear)`flex-shrink: 0;`;

