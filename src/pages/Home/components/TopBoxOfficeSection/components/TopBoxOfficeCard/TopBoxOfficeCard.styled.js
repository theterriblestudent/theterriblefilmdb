import styled from 'styled-components';

export const StyledBoxOfficeCard = styled.div`
    position: relative;
    margin-right: 25px;
    margin-top: 30px;
    flex-shrink: 0;
    width: clamp(180px, 13.5vw, 250px);
    height: clamp(290px, 18.75vw, 360px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        border-radius: 3px;
        top: 0;
        left: 0;
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
            border-radius: 5px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.6);
        }
    }
    &:last-child {margin-right: 0;}
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        box-shadow: none;
        &:first-child {margin-left: 120px;}
    }
`;

export const StyledPositionNumber = styled.div`
    transform: translate(-45%, -40%);
    position: absolute;
    top: 0;
    left: 0;
    width: clamp(65px, 4.8vw, 90px);
    height: clamp(65px, 4.8vw, 90px);
    border-radius: 50%;
    background: ${props => props.theme.colors.bgDark};
    border: 3px solid ${props => props.theme.colors.clrAccent};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: clamp(3rem, 3.2vw, 3.8rem);
        font-weight: 1000;   
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: transparent;
        text-align: center;
        -webkit-text-stroke: 3px ${props => props.theme.colors.clrAccent};
    }
`;

export const StyledGrossAmount = styled.div`
    transition: all 0.5s;
    padding-right: 10px;
    opacity: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}){
        opacity: 1;
        border-radius: 0 0 5px 5px;
    }
    p {
        position: relative;
        font-size: 1.125rem;
        font-weight: bold;
        color: ${props => props.theme.colors.clrAccent};
    }
`;

export const StyledGrossOverlay = styled.div`
    transition: all 0.5s;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba( 21, 21, 21, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {border-radius: 0 0 5px 5px;}
`;