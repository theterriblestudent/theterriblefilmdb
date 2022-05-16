import {ContentStripe} from 'components';
import useNowShowingSection from './useNowShowingSection';

function NowShowingSection() {
    const {getTabs, getContent, data, titleText, buttonsRef} = useNowShowingSection();

    if (document.documentElement.clientWidth > 768)
        return <ContentStripe buttonsRef={buttonsRef} titleText={titleText} getContent = {getContent} getTabs = {getTabs} id="now-showing-section"/>
    else 
        return getTabs().map((tab, index) => {
            return <ContentStripe titleText={titleText} title={tab.title} getContent = { getContent } data={data[index]} getTabs={() => [tab]} />
        });
}

export default NowShowingSection;