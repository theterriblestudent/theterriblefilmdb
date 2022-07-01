import styled from 'styled-components'

export const StyledOverviewContainer = styled.section`
    width: 100%;
    min-height: 600px;
    position: relative;
`;

export const OverviewImage = styled.picture`
    position: absolute;
    width: 100%;
    height: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.95);
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }
`;

export const OverviewContent = styled.div`
    ${props => props.theme.containers.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;



`;
