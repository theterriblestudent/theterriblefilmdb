import styled from 'styled-components';

export const StyledOverviewContainer = styled.section`
    width: 100%;
    min-height: 100px;
    padding-bottom: 50px;
    position: relative;
`;

export const OverviewImage = styled.picture`
    position: absolute;
    width: 100%;
    height: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.95);
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }
`;

export const OverviewContent = styled.div`
    position: relative;
    ${props => props.theme.containers.small};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
    gap: 40px;
    padding-top: 110px;

    img {
        width: clamp(16.875rem, 15.536rem + 4.286vw, 18.75rem);
        border-radius: 3px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}){
            display: none;
        }
    }
`;


export const StyledMediaInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    h1, h2 {
        color: ${props => props.theme.colors.light_text};
        font-family: ${props => props.theme.font_stacks.primary};
        font-weight: bold;
    }
    h1 {
        font-size: 1.8rem;
        font-size: clamp(1.8rem, 1.3rem + 1.6vw, 2.5rem);
    }
    h2 {
        font-size: 1.45rem;
        font-size: clamp(1.45rem, 1.129rem + 1.029vw, 1.9rem);
        @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
            margin-bottom: -12px;
            margin-top: 7px;
        }
    }
`;

export const StyledSynopsis = styled.p`
    font-family: ${props => props.theme.font_stacks.secondary};
    color: ${props => props.theme.colors.light_text};
    font-size: 1rem;
    max-width: 95%;
    font-size: clamp(1rem, 0.911rem + 0.286vw, 1.125rem);

    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}){
        line-height: 1.6rem;
    }
`;
