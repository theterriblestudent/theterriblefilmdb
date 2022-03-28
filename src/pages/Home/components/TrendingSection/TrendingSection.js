import React from 'react';
import {ContentStripe} from 'components';
import composeHooks from 'react-hooks-compose';
import useTrendingSection from './useTrendingSection';

function TrendingSection ({ getContent, getTabs, id="" }) {
  return (<ContentStripe getContent = { getContent } id = {id} getTabs={getTabs}/>);
};

export default composeHooks( { useTrendingSection } ) (TrendingSection);