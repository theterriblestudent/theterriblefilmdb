import React from 'react';
import { Loader, MediaCard, StyledButton } from 'components';
import { useFetch } from 'hooks';
import {useTheme} from 'styled-components';

function useTrendingSection(id) {
    const theme = useTheme();
    const [period, setPeriod] = React.useState('day');
    const { data, hasError, isLoading } = useFetch(`https://api.themoviedb.org/3/trending/all/${period}?api_key=f4b38564562890f30d78269e51e393a2`);

    function getTabs() {
        return [
            <StyledButton outlined btnColor={theme.colors.textLight} onClick={() => setPeriod('day')}>
                Today
            </StyledButton>,
            <StyledButton outlined btnColor={theme.colors.textLight} onClick={() => setPeriod('week')}>
                All Week
            </StyledButton>   
        ];
    }

    function getContent() {
        return (isLoading ? <Loader /> : <MediaCard release_date="2018-04-25" title="Some Goffy Ass Movie" media_id="50" media_type="tv"/>);
    }
    return {getContent, getTabs}
}

export default useTrendingSection;
