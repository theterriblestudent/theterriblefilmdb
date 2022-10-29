import { Loader } from 'components';
import { RelatedMediaCard } from 'pages/MediaInfoPage/components/RelatedMedia/components';
import { getReleaseDate } from 'utils';
import { MEDIUM_POSTER } from 'utils/CONSTANTS';

function generateRelatedMediaCards(data) {
    if (data.results.length === 0) return <Loader />;
    return (
        data.results.map(related_media => {
            return (
                <RelatedMediaCard image={ `${MEDIUM_POSTER}/${related_media.poster_path}` }
                releaseDate={getReleaseDate(related_media.release_date || related_media.first_air_date)} />
            );
        })
    );
}

export default generateRelatedMediaCards;