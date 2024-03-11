import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePRNGenerator(){
    const [prngen, setPRNGenerator] = useState([]);
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPRNGenerator(values => ({ ...values, [name]: value }))
    }
     
    const handleSubmit = (event) => {

                let demo = JSON.stringify(prngen);
                console.log(JSON.parse(demo));
                fetch("http://localhost:8080/api/prngen", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r=>{ })

                event.preventDefault();
                navigate('/');
                alert(prngen)
            }

    return(
        <form onSubmit={handleSubmit}>
            <label>Student ID: </label>
            <input type="number" name = "student_Id" onChange={handleChange}></input>
            <br/>
            <input type="submit"/>
        </form>
    )
}