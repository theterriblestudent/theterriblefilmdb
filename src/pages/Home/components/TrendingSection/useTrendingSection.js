import React from 'react';
import { StyledButton } from 'components';
import { useFetch } from 'hooks';
import {useTheme} from 'styled-components';
import {generateCards} from 'utils';
import {handleTitleButtonClick} from 'pages/Home/utils';

function useTrendingSection(id) {
    const theme = useTheme();
    const titleText = React.useRef();
    const buttonsRef = React.useRef();
    const titles = ["Trending Today", "Trending All Week"];
    const periods = ['DAY', 'WEEK'];
    const [shown, setShown] = React.useState("DAY");
    const { data: trendingAllDay } = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f4b38564562890f30d78269e51e393a2`);
    const {data: trendingAllWeek} = useFetch(`https://api.themoviedb.org/3/trending/all/week?api_key=f4b38564562890f30d78269e51e393a2`);

    function getTabs() {
        return [
            {
                button: <StyledButton outlined btnColor={theme.colors.clrAccent} onClick={(event) => handleTitleButtonClick(periods[0], titles[0], event.target, setShown, theme, titleText, buttonsRef)}> Today</StyledButton>,
                title: titles[0],
                },
            {
                button: <StyledButton outlined btnColor={theme.colors.textLight} onClick={(event) => handleTitleButtonClick(periods[1], titles[1], event.target, setShown, theme, titleText, buttonsRef)}>All Week</StyledButton>,
                title: titles[1],
            }   
        ];
    }

    function getContent(data) {
        if (data) return generateCards(data);
        if (shown === 'DAY') return generateCards(trendingAllDay);
        return generateCards(trendingAllWeek);
    }
    return {getContent, getTabs, titleText, buttonsRef, data: [trendingAllDay, trendingAllWeek]}
}

export default useTrendingSection;
