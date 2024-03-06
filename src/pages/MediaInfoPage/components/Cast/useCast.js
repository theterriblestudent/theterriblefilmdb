import React from 'react';
import { CastCard } from 'pages/MediaInfoPage/components/Cast/components';

function useCast(data) {
    const titleText = React.useRef();

    React.useEffect(() => {
        titleText.current.innerText = "Top Cast";
    }, []);

    function generatePeoplesCards(data) {
        return data.map(item => {
            return <CastCard profile_image={item.profile_path} name={item.name || item.original_name} character={item.character}/>
        });
    }

    function getContent() {
        if (data) return generatePeoplesCards(data.cast);
    }

    return {titleText, getContent};
}

export default useCast;