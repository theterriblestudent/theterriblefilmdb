import {MediaStripe} from 'pages/Home/components';
import {generateCards} from 'utils/card-builders';

function UpcomingSection() {
  return <MediaStripe title={"Upcoming Movies"} path={"movie/upcoming"} cardBuilder={generateCards} />;
}
export default UpcomingSection;