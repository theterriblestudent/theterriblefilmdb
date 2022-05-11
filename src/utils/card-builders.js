import {MediaCard} from 'components';
import {Loader} from 'components';

function getMediaType(media_info) {
    return (media_info.release_date ? 'movie' : 'tv');
}

function generateCards(data) {
    if (data.length === 0) return <Loader />;
    return (
        data.map(media => {
            return (
                <MediaCard media_id={media.id} media_type={getMediaType(media)} poster={media.poster_path}
                backdrop_image={media.backdrop_path} title={media.title || media.original_title || media.name || media.original_name}
                release_date={getMediaType(media) === 'movie' ? media.release_date : media.first_air_date}/>
            );
        })
    );
};

export {generateCards, getMediaType};