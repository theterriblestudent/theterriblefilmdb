import {BackgroundImage} from 'pages/Home/components';
import { useTheme, css } from 'styled-components';

function useBackground() {
    const theme = useTheme()
    const styles = css`
        background: rgb(0, 0, 0);
        background: linear-gradient(90deg, rgba(0,0,0,0.958420868347339) 0%,
        rgba(0,0,0,0.8155637254901961) 37%, rgba(0,0,0,0.14889705882352944) 100%);
        @media only screen and (max-width: ${theme.breakPoints.tablet}) {
          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8519782913165266) 28%, rgba(0,0,0,0.5298494397759104) 44%, rgba(0,0,0,0) 59%, rgba(0,0,0,0) 100%);
        }
    `;

    function getBackground(heroMovie) {
        return (
            heroMovie &&
            <BackgroundImage>
                <source media={`(min-width: ${theme.breakPoints.tablet})`}
                        srcSet={heroMovie.backdrop}/>
                <source media={`(max-width: ${theme.breakPoints.tablet})`}
                        srcSet={heroMovie.poster}/>
                <img alt={`${heroMovie.title} showcase`} />
            </BackgroundImage>
        );
    }

    return {getBackground, styles};
}

export default useBackground;
