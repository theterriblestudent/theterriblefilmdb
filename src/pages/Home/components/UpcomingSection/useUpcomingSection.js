import React from 'react';
import { useFetch } from 'hooks'
import { generateCards } from 'utils';

function useUpcomingSection() {
  const {data} = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=f4b38564562890f30d78269e51e393a2&language=en-US");
  const titleRef = React.useRef();

  React.useEffect(() => {
    titleRef.current.innerText = "Upcoming Movies";
  }, []);

  function getContent() {
      if (data) return generateCards(data);
  }

  return {getContent, titleRef};
}

export default useUpcomingSection