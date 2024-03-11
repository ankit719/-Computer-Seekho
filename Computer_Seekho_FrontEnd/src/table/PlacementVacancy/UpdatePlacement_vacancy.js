import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePlacement_vacancy(){
    const [placement_vacancy,setPlacement_vacancy]=useState({});
    const {id}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/api/Placement_vacancy/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setPlacement_vacancy(result);
        }).catch((e)=>console.log(e));
    },[]);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setPlacement_vacancy(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(placement_vacancy);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/Placement_vacancy/"+id,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:demo
        }).then(r=>{console.log(r)})
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>

            <br/><label>company_id:</label>
            <input
               type="number"
               name="company_id"
               onChange={handleChange}
            />

            <br/><label>location_id:</label>
            <input
               type="number"
               name="location_id"
               onChange={handleChange}
            />
            
            <br/><label>Vacancy:</label>
            <input
               type="number"
               name="vacancy"
               onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    );
}
export default UpdatePlacement_vacancy;