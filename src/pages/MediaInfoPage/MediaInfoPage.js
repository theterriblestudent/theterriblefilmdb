import React from 'react';
import composeHooks from 'react-hooks-compose';
import useMediaInfoPage from './useMediaInfoPage';
import { MediaOverview, Cast, RelatedMedia } from 'pages/MediaInfoPage/components';

function MediaInfoPage({data, getDepartmentMembers}) {
  return (
    <React.Fragment>
      <MediaOverview getDepartmentMembers = {getDepartmentMembers}/>
      <Cast data={data} />
      <RelatedMedia />
    </React.Fragment>
  );
}

export default composeHooks({useMediaInfoPage})(MediaInfoPage);

