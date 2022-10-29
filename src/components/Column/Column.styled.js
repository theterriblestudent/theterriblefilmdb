import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '10px'};
    align-items: ${props => props.align_items || 'flex-start'};
    justify-content: ${props => props.justify_content || 'flex-start'};
`;

export default Column;