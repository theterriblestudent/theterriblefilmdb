import {StyledForm, StyledInput, StyledSearchButton, StyledSearchIcon} from 'components';
import useSearchForm from './useSearchForm';
import composeHooks from 'react-hooks-compose';

function SearchForm({searchQuery,handleSearch, mobile}) {
    return (
        <StyledForm mobile={mobile}>
            <StyledInput value={searchQuery} onChange={handleSearch}/>
            <StyledSearchButton>
                <StyledSearchIcon />
            </StyledSearchButton>
        </StyledForm>
    );
}

export default composeHooks({useSearchForm})(SearchForm);