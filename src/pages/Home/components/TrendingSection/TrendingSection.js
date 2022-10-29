import React from 'react';
import {ContentStripe} from 'components';
import composeHooks from 'react-hooks-compose';
import useTrendingSection from './useTrendingSection';

 function TrendingSection({data, getContent, getTabs,titleText, buttonsRef} ) {
  if (document.documentElement.clientWidth > 768)
    return <ContentStripe buttonsRef={buttonsRef} top="-150px"  titleText={titleText} getContent = { getContent } getTabs={ getTabs } />;
  else
    return getTabs().map((tab, index) => {
      return <ContentStripe titleText={titleText} top="-150px" getContent = { getContent } key={ index } title = {tab.title} data={ data[index]} getTabs={() => [tab]} />;
    })
};

export default composeHooks( { useTrendingSection } ) (TrendingSection);