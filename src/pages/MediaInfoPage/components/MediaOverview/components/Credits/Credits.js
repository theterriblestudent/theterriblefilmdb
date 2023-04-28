import composeHooks from 'react-hooks-compose';
import useCredits from './useCredits';
import {StyledCredits} from './Credits.styled';

function Credits({value_key, values, getValues}) {
    return (
        <StyledCredits>
            <h4>{`${value_key}: `}</h4>
            <p>{getValues(values)}</p>
        </StyledCredits>
    );
}

export default composeHooks({useCredits})(Credits);
