import {MediaStripe} from 'pages/Home/components';
import {generateCards} from 'utils/card-builders';

function TopRatedMoviesSection() {
  return <MediaStripe title={"Top Rated Movies"} path={"movie/top_rated"} cardBuilder={generateCards} />;
}
export default TopRatedMoviesSection;