import {MediaStripe} from 'pages/Home/components';
import {generateCards} from 'utils/card-builders';

function PopularTVShowsSection() {
  return <MediaStripe title={"Popular TV Shows"} path={"tv/popular"} cardBuilder={generateCards} />;
}
export default PopularTVShowsSection;