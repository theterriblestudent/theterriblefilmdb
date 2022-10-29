import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: ${props => props.j_content || 'flex-start'};
    align-items: ${props => props.a_items || 'center'};
    gap: ${props => props.gap || '10px'};
`;

export default Row;