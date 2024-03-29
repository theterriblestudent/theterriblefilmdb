import { useTheme } from 'styled-components';

function useTrailerCard(trailerImage) {
    const theme = useTheme();

    /*
     * This function changes the nowShowingSection's background image to the backdrop
     * image of the movie/tv-show that was hovered on.
     */
    function handleMouseOver() {
        const bg = document.querySelector('.now-showing-bg-image');
        if(document.documentElement.clientWidth < theme.breakpoints.tablet || trailerImage === bg.src)
            return;
        bg.classList.add('transparent');
        window.setTimeout(() => {
            bg.src = trailerImage
            window.setTimeout(() => bg.classList.remove('transparent'), 100);
        }, 500);
    }

    return {handleMouseOver};
}

export default useTrailerCard
