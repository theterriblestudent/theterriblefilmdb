import {useFetchMedia} from 'hooks';
import {useParams} from 'react-router-dom';


function useMediaInfoPage() {
    const { media_id, media_type } = useParams();
    const data = useFetchMedia(`https://api.themoviedb.org/3/${media_type}/${media_id}/credits?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);

    function getDepartmentMembers(department) {
        let departmentMembers;
        if (data) {
            departmentMembers = data.crew.filter(unit => unit.known_for_department === department);
            departmentMembers = departmentMembers.map(member => member.name);
            departmentMembers = Array.from(new Set(departmentMembers)).slice(0, 2);
            return (departmentMembers.length > 0) ? departmentMembers : ["N/A"];
        }
        return ["Loading..."];
    }

    return {data, getDepartmentMembers};
}

export default useMediaInfoPage;