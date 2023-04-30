import { Container, ContentStripe } from "components";
import { CastContainer } from './Cast.styled';
import useCast from "./useCast";

function Cast({ data }) {
    const {titleText, getContent} = useCast(data);
    return (
        <CastContainer small>
            <ContentStripe no_default_container titleText={titleText} getContent={getContent} card_gap="clamp(0.55rem, 0.229rem + 1.029vw, 1rem)" align="stretch" />
        </CastContainer>
    );
}

export default Cast;
