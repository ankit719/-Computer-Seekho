import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateClosure(){
    const [clo, setClosure] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setClosure(values => ({ ...values, [name]: value }))
    }
     
    const handleSubmit = (event) => {

                let demo = JSON.stringify(clo);
                console.log(JSON.parse(demo));
                fetch("http://localhost:8080/api/closure", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r=>{ })

                event.preventDefault();
                navigate('/');
                alert(clo)
            }

    return(
        <form onSubmit={handleSubmit}>
            <label>Reason: </label>
            <input type="text" name = "closure_Reason" onChange={handleChange}></input>
            <br/>
            <input type="submit"/>
        </form>
    )
}