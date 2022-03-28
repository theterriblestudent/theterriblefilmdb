import styled from 'styled-components';

export const StyledOverlay = styled.div`
    width: ${props => {
        if(props.fullWidth || props.fillContainer) return '100%';
        if(props.fullscreen) return '100vw';
        return props.width || 0; 
    }};
    height: ${props => {
        if(props.fullHeight || props.fillContainer) return '100%';
        if (props.fullscreen) return '100vh';
        return props.height || 0;
    }};
    position: absolute;
    top: ${props => props.top || 0};
    left: ${props => props.left || 0};
    ${props => props.styles};
    
`