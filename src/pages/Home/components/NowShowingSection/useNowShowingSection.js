import React from 'react';
import TrailerCard from './TrailerCard/TrailerCard';
import {handleTitleButtonClick} from 'pages/Home/utils';
import {useTheme} from 'styled-components';
import { useFetch } from 'hooks';
import { Loader, StyledButton } from 'components';

function useNowShowingSection() {
    const TYPES = ["THEATRES", "TV"];
    const titles = ["In Theaters", "On Tv"];
    const titleText = React.useRef();
    const buttonsRef = React.useRef();
    const [shown, setShown] = React.useState(TYPES[0]);
    const {data: theatres} = useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1');
    const {data: tv} = useFetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1');
    const theme = useTheme();

    React.useLayoutEffect(() => {
        if (document.querySelector("#now-showing-section")) {
            const bgImage = document.createElement('img');
            const bgOverlay = document.createElement('div');
            bgImage.className = "now-showing-bg-image";
            bgOverlay.className = "now-showing-bg-overlay";
            document.querySelector("#now-showing-section").prepend(bgImage, bgOverlay)
        }
    }, []);
    React.useEffect(() => {
        if (theatres.length > 0 && document.querySelector(".now-showing-bg-image")) {
            document.querySelector(".now-showing-bg-image").setAttribute("src", `https://image.tmdb.org/t/p/w780${theatres[0].backdrop_path}`);
        }  
    }, [theatres]);

    function getTabs() {
        return [
            {
                button: <StyledButton outlined btnColor={theme.colors.clrAccent} onClick={(event) => handleTitleButtonClick(TYPES[0], titles[0], event.target, setShown, theme, titleText, buttonsRef)}>Theatres</StyledButton>,
                title: titles[0]
            },
            {
                button:<StyledButton outlined btnColor={theme.colors.textLight} onClick={(event) => handleTitleButtonClick(TYPES[1], titles[1], event.target, setShown, theme, titleText, buttonsRef)}>TV</StyledButton>,
                title: titles[1]
            }
        ]
    }

    /**Not using the generateCards() utility function because the TrailerCard
     * is unique to the HomePage.
     */
    function generateCards(data) {
        if (data.length === 0) return <Loader />
        return (
            data.map(media => {
                return (
                    <TrailerCard title={media.title || media.original_title || media.name || media.original_name} thumbnail={media.backdrop_path} media_id={media.id} />
                );
            })
        );
    };

    function getContent(data) {
        if (data) return generateCards(data);
        if (shown === 'THEATRES') return generateCards(theatres);
        return generateCards(tv);
    }

    return {getContent, getTabs, titleText, buttonsRef, data: [theatres, tv]};
}

export default useNowShowingSection