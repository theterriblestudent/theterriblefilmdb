import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`;

export const StyledLoader = styled.div`
    width: 50px;
    height: 50px;
    padding: 3px;
    border: 3px transparent solid;
    border-top: 3px ${props => props.theme.colors.accent} solid;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    animation: ${rotate} 1s ease-in-out forwards infinite;
`;
