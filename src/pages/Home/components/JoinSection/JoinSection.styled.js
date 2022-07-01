import styled from 'styled-components';

export const StyledJoinSection = styled.section`
    margin-top: -80px;
    width: 100%;
    position: relative;
    padding: 55px 0;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        margin-top: 0;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        col
    }
`;

export const BackgroundOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba( 43, 42, 42, 0.85);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`;

export const JoinSectionContainer = styled.div`
    position: relative; 
    width: 90%;
    max-width: 1250px;
    margin: 0 auto; 
    text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.6);
    font-size: clamp(1.05rem, 1vw, 1.2rem);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 1.35;
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        flex-direction: column;
    }

    ul {
        align-self: center;
        max-width: 480px;
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            display: flex;
            align-items: center;
            flex-direction: column;
            list-style: none;
            /* width: 80%; */
        }
        li {
            color: ${props => props.theme.colors.textLight};
            font-weight: 400;
            text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.85);
            margin-bottom: 3px;
            &:last-child {margin-bottom: 0;}
            @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
                text-align: center;
                margin-bottom: 10px;
                line-height: 1.2;
            }
        }
    }
`;

export const JoinText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0px;
    margin-right: 35px;
    align-items: flex-start;
    text-align: start;
    max-width: 620px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        align-items: center;
        margin-bottom: 30px;
        margin-right: 0;
    }
    h1 {
        margin-bottom: 25px;
        font-size: clamp(2.6rem, 2.5vw, 3rem);
        font-family: ${props => props.theme.fontStacks.primaryFontStack};
        color: ${props => props.theme.colors.textLight};
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            text-align: center;
        }
    }
    p {
        margin-bottom: 15px;
        font-weight: 400;
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textLight};
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            text-align: center;
        }
    }
    a {
        padding-left: 35px;
        text-shadow: none;
        padding-right: 35px;
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    }
`;