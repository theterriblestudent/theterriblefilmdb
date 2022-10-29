import { Container, ContentStripe } from "components";
import { CastContainer } from './Cast.styled';
import useCast from "./useCast";

function Cast({ data }) {
    const {titleText, getContent} = useCast(data);
    return (
        <CastContainer small>
            <ContentStripe no_default_container titleText={titleText} getContent={getContent} />
        </CastContainer>
    );
}

export default Cast;