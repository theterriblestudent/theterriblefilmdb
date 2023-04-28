import styled from 'styled-components';
import {FaPlay} from 'react-icons/fa';

export const StyledTrailerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    width: clamp(9.375rem, -2.23214rem + 37.14285714vw, 25.625rem);
    @media only screen and (min-width: ${props => props.theme.breakPoints.tablet}) {aspect-ratio: 16 / 9;}
`;

export const VideoThumbnail = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
      margin-bottom: 0;
      box-shadow: none;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
        }
    }
`;

export const PlayButton = styled(FaPlay)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.1rem;
    color: ${props => props.theme.colors.textLight};
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {display: none;}
`;

export const VideoTitle = styled.h2`
    color: ${props => props.theme.colors.textLight};
    font-family: ${props => props.theme.fontStacks.primaryFontStack};
    font-size: 1.15rem;
    font-size: clamp(1.15rem, 0.8999999999999999rem + 0.8000000000000002vw, 1.45rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 3px;
    text-shadow: 2px 4px 7px rgba(0,0,0,0.6);
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: none;
        margin-bottom: 0;
    }
`;

export const VideoDesctiption = styled.p`
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.fontStacks.secondaryFontStack};
    font-size: 1rem;
    font-size: clamp(1rem, 0.8958333333333334rem + 0.33333333333333337vw, 1.125rem);
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 4px 7px rgba(0,0,0,0.6);
    @media only screen and (max-width: ${props => props.theme.breakPoints.tablet}) {display: none;}
`;
