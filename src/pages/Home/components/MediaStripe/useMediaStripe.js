import React from 'react';
import { useFetch } from 'hooks'

function useMediaStripe(path, title, cardBuilder) {
  const {data} = useFetch(`https://api.themoviedb.org/3/${path}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);
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