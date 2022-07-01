import { useFetchMedia } from 'hooks'
import React from 'react'
import TopBoxOfficeCard from './components/TopBoxOfficeCard/TopBoxOfficeCard';

function useTopBoxOfficeSection(title) {
    const titleText = React.useRef();
    const data = useFetchMedia('https://imdb-api.com/en/API/BoxOffice/k_8kp47a99');

    React.useEffect(() => {
        titleText.current.innerText = title;
      }, [title]);

    function generateBoxOfficeCards(data) {
        return data.map((item, index) => {
            return <TopBoxOfficeCard position={index + 1} id={item.id} title={item.original_title} gross={item.weekend} />
        });
    }

    function getContent() {
        if (data) return generateBoxOfficeCards(data.items);
    }
    
    return {titleText, getContent};
}

export default useTopBoxOfficeSection