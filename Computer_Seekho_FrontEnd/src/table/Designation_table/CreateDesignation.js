import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDesignation(){
    const [designation, setDesignation] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDesignation(values => ({ ...values, [name]: value }))
    }
     
    const handleSubmit = (event) => {

                let demo = JSON.stringify(designation);
                console.log(JSON.parse(demo));
                fetch("http://localhost:8080/api/designation", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r=>{ })

                event.preventDefault();
                navigate('/');
                alert(designation)
            }

    return(
        <form onSubmit={handleSubmit}>
            <label>Designation: </label>
            <input type="text" name = "designation" onChange={handleChange}></input>
            <br/>
            <input type="submit"/>
        </form>
    )
}