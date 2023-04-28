import { Container, ContentStripe } from "components";
import { CastContainer } from './Cast.styled';
import useCast from "./useCast";

function Cast({ data }) {
    const {titleText, getContent} = useCast(data);
    return (
        <CastContainer small>
            <ContentStripe no_default_container titleText={titleText} getContent={getContent} card_gap="clamp(0.55rem, 0.22857142857142865rem + 1.0285714285714285vw, 1rem)" align="stretch" />
        </CastContainer>
    );
}

export default Cast;