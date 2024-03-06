import React from 'react';
import {useParams} from 'react-router-dom';
import { useFetchMedia } from 'hooks';

/*
    The overview section need to fetch data from two endpoints:-
        1. https://api.themoviedb.org/3/{media_type}/{media_id}?api_key={api_key}&language=en-US
        2. For tv shows the state for content ratings is also required. For movies, content ratings are contained
           in the release dates endpoint.
        3. The credit api call will be made from the MediaInfoPage component and passed as a prop
           to the Media overview component.
*/

function useMediaOverview() {
    const {media_type, media_id} = useParams();
    const [ratingsContainer, setRatingsContainer] = React.useState(null);
    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;
    const {REACT_APP_API_KEY_IP_LOOKUP: API_KEY_IP_LOOK_UP} = process.env;
    const mediaInfo = useFetchMedia(`https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=${API_KEY_TMDB}&language=en-US`);
    const [countryCode, setCountryCode] = React.useState(null);
    const [ageRating, setAgeRating] = React.useState('NR');

    React.useEffect(() => {

        fetch(`https://extreme-ip-lookup.com/json/?key=${API_KEY_IP_LOOK_UP}`)
            .then(response => response.json())
            .then(data => setCountryCode(data.countryCode))
            .catch(error => {
                console.error(error, error.stack);
                setCountryCode('US');
            })

        if(media_type === 'tv')
            getRatingsContainer(`https://api.themoviedb.org/3/tv/${media_id}/content_ratings?api_key=${API_KEY_TMDB}`);
        if (media_type === 'movie')
            getRatingsContainer(`https://api.themoviedb.org/3/movie/${media_id}/release_dates?api_key=${API_KEY_TMDB}`);
            //eslint-disable-next-line
        }, [media_type, media_id]);

    React.useEffect(() => {
        getRatings();
        //eslint-disable-next-line
    }, [ratingsContainer, countryCode]);


    function getRatingsContainer(url) {
        fetch(url)
            .then (response => response.json())
            .then (data => setRatingsContainer(data));
    }

    function getRatings() {
        let region_data;
        if (ratingsContainer && countryCode) {
            if (ratingsContainer.results.length > 0) {
                region_data = ratingsContainer.results.find(e => e.iso_3166_1 === countryCode) ||
                    ratingsContainer.results.find(e => e.iso_3166_1 === 'US') ||
                    ratingsContainer.results[0];

                    if (media_type === 'movie') {
                        if (region_data.release_dates.length > 0) {
                            setAgeRating(region_data.release_dates[0].certification || 'NR');
                        }
                    } else if (media_type === 'tv') {
                        setAgeRating(region_data.rating || 'NR');
                    }
            }
        }
    }

    return {mediaInfo, ageRating, media_type};

}

export default useMediaOverview;
