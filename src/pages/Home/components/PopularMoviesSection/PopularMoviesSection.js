import {MediaStripe} from 'pages/Home/components';
import {generateCards} from 'utils/card-builders';

function PopularMoviesSection() {
  return <MediaStripe title={"Popular Movies"} path={"movie/popular"} cardBuilder={generateCards} />;
}
export default PopularMoviesSection;