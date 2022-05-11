import composeHooks from 'react-hooks-compose';
import { ContentStripe } from 'components'
import useUpcomingSection from './useUpcomingSection';

function UpcomingSection( { getContent, titleRef }) {
  return  <ContentStripe titleText={titleRef} getContent= { getContent } />;
}
export default composeHooks({ useUpcomingSection })(UpcomingSection);