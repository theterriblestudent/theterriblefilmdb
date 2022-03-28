import React from 'react';
import {movies} from 'utils';

function useHeroSection() {
    const [heroMovie, setHeroMovie] = React.useState(null);
    React.useEffect(() => {
        setHeroMovie(movies[Math.floor(Math.random() * (movies.length))])
    }, [])
    return {heroMovie};
}
export default useHeroSection;