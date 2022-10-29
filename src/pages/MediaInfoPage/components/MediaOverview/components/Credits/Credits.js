import composeHooks from 'react-hooks-compose';
import useCredits from './useCredits';
import {StyledCredits} from './Credits.styled';

function Credits({key, values, getValues}) {
    return (
        <StyledCredits>
            <h4>{`${key}: `}</h4>
            <p>{getValues(values)}</p>
        </StyledCredits>
    );
}

export default composeHooks({useCredits})(Credits);
