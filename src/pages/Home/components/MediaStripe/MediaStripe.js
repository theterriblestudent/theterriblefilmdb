import { ContentStripe } from "components";
import useMediaStripe from "./useMediaStripe";

function MediaStripe({path, title, cardBuilder}) {
    const { getContent, titleRef } = useMediaStripe(path, title, cardBuilder);
    return <ContentStripe titleText={titleRef} getContent={getContent} top="-150px"/>;
}
export default MediaStripe;
