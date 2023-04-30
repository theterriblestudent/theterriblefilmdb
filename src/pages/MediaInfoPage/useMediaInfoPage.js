import {useFetchMedia} from 'hooks';
import {useParams} from 'react-router-dom';


function useMediaInfoPage() {
    const { media_id, media_type } = useParams();
    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;
    const data = useFetchMedia(`https://api.themoviedb.org/3/${media_type}/${media_id}/credits?api_key=${API_KEY_TMDB}&language=en-US`);

    function getDepartmentMembers(department) {
        let departmentMembers;
        if (data) {
            departmentMembers = Array.from(new Set(
                data.crew.filter(unit => unit.known_for_department === department)
                .map(member => member.name)));
            return (departmentMembers.length > 0) ? departmentMembers.slice(0, 2) : ["N/A"];
        }
        return ["Loading..."];
    }

    return {data, getDepartmentMembers};
}

export default useMediaInfoPage;
