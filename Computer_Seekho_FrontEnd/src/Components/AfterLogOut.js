import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
function AfterLogOut(){
    const navigate = useNavigate();
    useEffect(() => {
        window.history.forward(); // Apply history forward when the component mounts
        sessionStorage.setItem("user","")
        sessionStorage.setItem("userID","")
        sessionStorage.setItem("pageContext","")
        navigate('/');
    }, []);

    return(
        <div>

        </div>
    )
}
export default AfterLogOut;