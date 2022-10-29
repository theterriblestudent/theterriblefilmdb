import { ContentStripe } from 'components';
import React from 'react';
import useTopBoxOfficeSection from './useTopBoxOfficeSection';

function TopBoxOfficeSection() {
  let renders = React.useRef(1);
  React.useEffect(() => {console.log(renders.current++)})
  const {titleText, getContent} = useTopBoxOfficeSection("Top Box Office");
  return <ContentStripe top="-150px" titleText={titleText} getContent={getContent} />;
  
}

export default TopBoxOfficeSection;