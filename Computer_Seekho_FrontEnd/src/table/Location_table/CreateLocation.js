import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateLocation(){
    const [location, setLocation] = useState([]);
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLocation(values => ({ ...values, [name]: value }))
    }
     
    const handleSubmit = (event) => {

                let demo = JSON.stringify(location);
                console.log(JSON.parse(demo));
                fetch("http://localhost:8080/api/location", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r=>{ })

                event.preventDefault();
                navigate('/');
                alert(location)
            }

    return(
        <form onSubmit={handleSubmit}>
            <label>City: </label>
            <input type="text" name = "city" onChange={handleChange}></input>
            <br/>
            <label>Country: </label>
            <input type="text" name = "country" onChange={handleChange}></input>
            <br/>
            <label>Landmark: </label>
            <input type="text" name = "landmark" onChange={handleChange}></input>
            <br/>
            <label>Pincode: </label>
            <input type="number" name = "pincode" onChange={handleChange}></input>
            <br/>
            <input type="submit"/>
        </form>
    )
}