import composeHooks from 'react-hooks-compose';
import useBackground from './useBackground';
import {StyledBackground} from 'pages/Home/components';
import { StyledOverlay } from 'components';

function Background({getBackground, heroMovie, styles}) {
    return (
        <StyledBackground>
            {getBackground(heroMovie)}
            <StyledOverlay fillContainer styles={styles} />
        </StyledBackground>
    );
};
export default composeHooks({useBackground})(Background);