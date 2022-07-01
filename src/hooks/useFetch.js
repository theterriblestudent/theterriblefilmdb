import React from 'react';

function useFetch(url, limit="") {
   const pageNumber = React.useRef(1);
   const [data, setData] = React.useState([]);
   const [isLoading, setLoading] = React.useState(false);
   const [hasError, setHasError] = React.useState(false);
   const [hasMore, setHasMore] = React.useState(true);

   React.useEffect(() => {
      pageNumber.current = 1;
      setData([]);
   }, [url]);

   React.useEffect(() => {
      setHasError(false);
      setLoading(true);
      fetch(`${url}&page=${pageNumber.current}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
      if (pageNumber === data.total_pages) setHasMore(false);
      setData((prev_results => [...prev_results, ...data.results]));
      })
      .catch(error => {
         setHasError(true);
         console.log(error);
      })
      .finally(() => setLoading(false));
   }, [url, pageNumber, limit])

   return {data, isLoading, hasError, hasMore, pageNumber};
};

export default useFetch;