import styled from 'styled-components';

export const Container = styled.div`
    ${props => props.small ? props.theme.containers.sm : props.theme.containers.lg}
`;