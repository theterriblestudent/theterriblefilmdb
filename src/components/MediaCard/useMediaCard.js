const { useFetch } = require("hooks");

function useMediaCard(media_id, media_type) {
    const {movieData} = useFetch(`https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=4b38564562890f30d78269e51e393a2&language=en-US`);
    function getGenres() {
        return <h1>Hello World</h1>;
    };
    return {getGenres};
}

export default useMediaCard;