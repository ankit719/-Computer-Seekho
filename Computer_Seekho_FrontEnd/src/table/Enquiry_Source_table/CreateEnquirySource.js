import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEnquirySource(){
    const [enquirysrc, setEnquirySource] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEnquirySource(values => ({ ...values, [name]: value }))
    }
     
    const handleSubmit = (event) => {

                let demo = JSON.stringify(enquirysrc);
                console.log(JSON.parse(demo));
                fetch("http://localhost:8080/api/enquirysrc", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r=>{ })

                event.preventDefault();
                navigate('/');
                alert(enquirysrc)
            }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enquiry Source: </label>
            <input type="text" name = "enquiry_Source" onChange={handleChange}></input>
            <br/>
            <input type="submit"/>
        </form>
    )
}