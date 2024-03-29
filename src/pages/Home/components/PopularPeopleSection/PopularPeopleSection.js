import React from 'react'
import composeHooks from 'react-hooks-compose';
import usePopularPeoplesSection from './usePopularPeopleSection';
import { ContentStripe } from 'components';

function PopularPeopleSection({titleText, getContent}) {
  return <ContentStripe titleText={titleText} getContent={getContent} top="-150px" />;
}

export default composeHooks({usePopularPeoplesSection})(PopularPeopleSection);