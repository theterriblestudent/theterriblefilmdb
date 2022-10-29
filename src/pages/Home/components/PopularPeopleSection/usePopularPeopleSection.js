import { useFetchMedia } from 'hooks'
import React from 'react'
import { PeoplesCard } from 'components';

function usePopularPeoplesSection() {
    const titleText = React.useRef();
    const data = useFetchMedia('https://api.themoviedb.org/3/person/popular?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1');

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