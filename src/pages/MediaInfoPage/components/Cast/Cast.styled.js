import styled from 'styled-components';
import { Container } from 'components';

export const CastContainer = styled(Container)`
    margin-top: 50px;
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 30px;
    }
`;
