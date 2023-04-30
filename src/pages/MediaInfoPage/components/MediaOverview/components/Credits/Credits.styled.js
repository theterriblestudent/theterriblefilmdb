import styled from 'styled-components';
import {Row} from 'components';

export const StyledCredits = styled(Row)`
    align-items: center;
    h4 {
        font-family: ${props => props.theme.font_stacks.primary};
        color: ${props => props.theme.colors.accent};
        font-size: 1rem;
        font-size: clamp(1rem, 0.929rem + 0.223vw, 1.1rem);
        font-weight: bold;
    }

    p {
        font-family: ${props => props.theme.font_stacks.secondary};
        color: ${props => props.theme.colors.light_text};
        font-size: 1rem;
        font-size: clamp(1rem, 0.929rem + 0.229vw, 1.1rem);
        margin-top: -3px;
    }
`;
