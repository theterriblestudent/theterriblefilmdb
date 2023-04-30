import React from 'react';
import { useFetch } from 'hooks'

function useMediaStripe(path, title, cardBuilder) {
    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;
    const {data} = useFetch(`https://api.themoviedb.org/3/${path}?api_key=${API_KEY_TMDB}&language=en-US`);
        const titleRef = React.useRef();

    React.useEffect(() => {
        titleRef.current.innerText = title;
    }, [title]);

    function getContent() {
        if (data) return cardBuilder(data);
    }

    return {getContent, titleRef};
}

export default useMediaStripe;
