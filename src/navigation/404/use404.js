import {useNavigate} from 'react-router-dom';
import { useTheme } from 'styled-components';

function use404() {
    const theme = useTheme();
    const navigate = useNavigate();
    function goBack() { navigate(-1);}
    function goHome() {navigate("/");}

    return {goBack, goHome, theme};
}

export default use404;