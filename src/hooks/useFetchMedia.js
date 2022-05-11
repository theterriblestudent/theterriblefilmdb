import React from 'react';

function useFetchMedia(url) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then(data => setData(data))
        .catch(e => console.log(e));
    }, [url])

    return data;
}

export default useFetchMedia;