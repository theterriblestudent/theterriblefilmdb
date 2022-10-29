import useRelatedMedia from "./useRelatedMedia";
import composeHooks from 'react-hooks-compose';
import { RelatedMediaContainer } from './RelatedMedia.styled';
import { ContentStripe } from 'components';

function RelatedMedia({ titleText, getContent }) {
    return (
        <RelatedMediaContainer small>
            <ContentStripe no_default_container titleText={titleText} getContent={getContent} />
        </RelatedMediaContainer>
    )
}

export default composeHooks({useRelatedMedia})(RelatedMedia);