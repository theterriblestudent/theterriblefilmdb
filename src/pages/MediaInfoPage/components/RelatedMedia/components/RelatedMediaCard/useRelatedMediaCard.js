import { useNavigate, useParams } from 'react-router-dom';

function useRelatedMediaCard() {

    const { media_type } = useParams();
    const navigate = useNavigate();

    function handleClick(media_id) {
        navigate(`/view/${media_type}/${media_id}`);
    }

  return {handleClick};
}

export default useRelatedMediaCard