import { useFetchMedia } from 'hooks'
import React from 'react'
import { PeoplesCard } from 'components';

function usePopularPeoplesSection() {
    const titleText = React.useRef();
    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;
    const data = useFetchMedia(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY_TMDB}&language=en-US&page=1`);

    React.useEffect(() => {
        titleText.current.innerText = "Popular People";
      }, []);

    function generatePeoplesCards(data) {
        return data.map(item => {
            return <PeoplesCard  id={item.id} path={item.profile_path}/>
        });
    }

    function getContent() {
        if (data) return generatePeoplesCards(data.results);
    }

    return {titleText, getContent};
}

export default usePopularPeoplesSection;
