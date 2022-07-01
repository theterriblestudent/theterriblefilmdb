import {useFetchMedia} from 'hooks';
import {useNavigate} from 'react-router-dom';


function useMediaCard(media_id, media_type) {
    const data = useFetchMedia(`https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);
    const navigate = useNavigate();
    function getGenres() {
        if (!data) return <p>Getting genres...</p>;
        return  data.genres.slice(0, 2).map((genre, index) => {
            if(index === data.genres.slice(0, 2).length - 1)
              return(<p>{genre.name}</p>);
            else {
              return (
                <>
                  <p>{genre.name}</p>
                  <div />
                </>
              );
            }
          });
    };

    function seeMoreInfo() { navigate(`/view/${media_type}/${media_id}`) }
    return {getGenres, seeMoreInfo};
}

export default useMediaCard;