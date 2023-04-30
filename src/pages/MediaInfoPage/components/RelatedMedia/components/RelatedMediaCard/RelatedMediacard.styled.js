import styled from 'styled-components';

export const StyledRelatedMediaCard = styled.div`
    width: 6.875rem;
    width: clamp(9.375rem, 6.25rem + 10vw, 13.75rem);
    height: auto;
    flex-shrink: 0;
    cursor: pointer;
    img {
        width: 100%;
        margin-bottom: 20px;
        border-radius: 5px;
    }
    p {
        font-family: ${props => props.theme.font_stacks.secondary};
        color: ${props => props.theme.colors.dark_text};
        font-size: 0.9rem;
        font-size: clamp(0.9rem, 0.829rem + 0.229vw, 1rem);
    }
`;
