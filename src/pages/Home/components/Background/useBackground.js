import {BackgroundImage} from 'pages/Home/components';
import { useTheme, css } from 'styled-components';

function useBackground() {
    const theme = useTheme();

    /*
     * CSS style that defines the gradient background overlay for the
     * showcase movie for both desktop and mobile.
     */
    const styles = css`
        background: rgb(0, 0, 0);
        background: linear-gradient(90deg, rgba(0,0,0,0.958) 0%, rgba(0,0,0,0.816) 37%, rgba(0,0,0,0.141) 100%);
        @media only screen and (max-width: ${theme.breakpoints.tablet}) {
          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.852) 28%, rgba(0,0,0,0.530) 44%, rgba(0,0,0,0) 59%, rgba(0,0,0,0) 100%);
        }
    `;

    function getBackground(heroMovie) {
        return (
            heroMovie &&
            <BackgroundImage>
                <source media={`(min-width: ${theme.breakpoints.tablet})`}
                        srcSet={heroMovie.backdrop}/>
                <source media={`(max-width: ${theme.breakpoints.tablet})`}
                        srcSet={heroMovie.poster}/>
                <img alt={`${heroMovie.title} showcase`} />
            </BackgroundImage>
        );
    }

    return {getBackground, styles};
}

export default useBackground;
