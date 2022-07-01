import React from 'react'
import {useFetchMedia} from 'hooks';

function useTopBoxOfficeCard(id) {
    const grossElement = React.useRef();
    const thisCard = React.useRef()

    const handleMouseOver = () => {grossElement.current.style.opacity = 1;}
    const handleMouseLeave = () => {grossElement.current.style.opacity = 0}

    React.useLayoutEffect(() => {
        if (thisCard.current) {
            thisCard.current.addEventListener('mouseover', handleMouseOver);
            thisCard.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            thisCard.current.removeEventListener('mouseover', handleMouseOver);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            thisCard.current.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);

    const data = useFetchMedia(`https://api.themoviedb.org/3/find/${id}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&external_source=imdb_id`);

    return {data, grossElement, thisCard};
}

export default useTopBoxOfficeCard