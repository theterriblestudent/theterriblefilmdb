import React from 'react';
import {movies} from 'utils';

function useHeroSection() {
    const [heroMovie, setHeroMovie] = React.useState(null);

    /* This randomly selects a movie to be shown in the hero section from the
     * JSON file that contains showcase movies.
     */
    React.useEffect(() => {
        setHeroMovie(movies[Math.floor(Math.random() * (movies.length))])
    }, [])
    return {heroMovie};
}
export default useHeroSection;
