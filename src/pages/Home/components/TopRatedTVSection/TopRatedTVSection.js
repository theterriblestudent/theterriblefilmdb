import {MediaStripe} from 'pages/Home/components';
import {generateCards} from 'utils/card-builders';

function TopRatedTVSection() {
  return <MediaStripe title={"Top Rated TV Shows"} path={"tv/top_rated"} cardBuilder={generateCards} />;
}
export default TopRatedTVSection;