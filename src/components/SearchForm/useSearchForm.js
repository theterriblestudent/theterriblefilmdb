import React from 'react';

function useSearchForm() {
    const [searchQuery, setSearchQuery] = React.useState("");
    function handleSearch(event) {setSearchQuery(event.target.value)};
    return {searchQuery, handleSearch}
}
export default useSearchForm;