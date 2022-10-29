import styled from 'styled-components';
import {Row} from 'components';

export const StyledCredits = styled(Row)`
    align-items: flex-start;
    h4 {
        font-family: ${props => props.theme.fontStacks.primaryFontStack};
        color: ${props => props.theme.colors.clrAccent};
        font-size: 1rem;
        font-size: clamp(1rem, 0.9285714285714285rem + 0.22857142857142876vw, 1.1rem);
        font-weight: bold;
    }

    p {
        font-family: ${props => props.theme.fontStacks.secondaryFontStack};
        color: ${props => props.theme.colors.textLight};
        font-size: 1rem;
        font-size: clamp(1rem, 0.9285714285714285rem + 0.22857142857142876vw, 1.1rem);
    }
`;