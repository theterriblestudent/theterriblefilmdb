import styled from 'styled-components';

export const Container = styled.div`
    ${props => props.small ? props.theme.containers.small : props.theme.containers.large}
`;
