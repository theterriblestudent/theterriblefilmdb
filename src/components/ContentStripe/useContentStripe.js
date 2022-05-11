import React from 'react';

function useContentStripe() {

    const scrollableContainer = React.useRef();

    function scrollLeft() {scrollableContainer.current.scrollLeft -= 550;};
    function scrollRight() {scrollableContainer.current.scrollLeft += 550};

    return {scrollLeft, scrollRight, scrollableContainer};
};

export default useContentStripe;