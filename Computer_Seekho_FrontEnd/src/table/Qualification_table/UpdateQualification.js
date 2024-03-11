import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateQualification(){
    const [qualification,setQualification]=useState({});
    const {id}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/api/Qualification/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setQualification(result);
        }).catch((e)=>console.log(e));
    },[]);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setQualification(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(qualification);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/Qualification/"+id,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:demo
        }).then(r=>{console.log(r)})
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>qualification_id:</label>
            <input
               type="text"
               name="qualification_id"
               value={qualification.qualification_id ?? ""}
               disabled={true}
               onChange={handleChange}
            />
            <br/><label>qualification:</label>
            <input
               type="text"
               name="qualification"
               value={qualification.qualification}
               onChange={handleChange}
            />
            <br/>
            <input type="submit"/>
            </form>
    );
}
