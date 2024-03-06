import React from 'react';
import { useParams } from 'react-router-dom';
import { generateRelatedMediaCards } from 'pages/MediaInfoPage/components/RelatedMedia/utils';
import { useFetchMedia } from 'hooks';

function useRelatedMedia() {
    const {media_type, media_id} = useParams();
    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;
    const data = useFetchMedia(`https://api.themoviedb.org/3/${media_type}/${media_id}/similar?api_key=${API_KEY_TMDB}&language=en-US&page=1`);

    const titleText = React.useRef();

    React.useEffect(() => {
        titleText.current.innerText = `Similar ${(media_type === 'tv') ? "TV Shows" : "Movies"}`;
    }, [media_type]);

    function getContent() {
        if (data) return generateRelatedMediaCards(data);
    }

    return { titleText, getContent };
}

export default useRelatedMedia;
