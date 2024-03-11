import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Campuslifeup(){
    const [Campuslife,setCampuslife]=useState([]);
    const {id}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/api/campuslife/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setCampuslife(result);      
        }).catch((e)=>console.log(e));
    },[]);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setCampuslife(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(Campuslife);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/campuslife/"+id,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:demo
        }).then(r=>{console.log(r)})
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
               type="number"
               name="campusLifeId"
               value={Campuslife.campusLifeId ?? ""}
               disabled={true}
               onChange={handleChange}
            />
            <br/><label>photo:</label>
            <input
               type="text"
               name="photo"
               value={Campuslife.photo ?? ""}
               onChange={handleChange}
            />
            <br/><label>Batchid:</label>
            <input
               type="number"
               name="batchId"
               value={Campuslife.batchId || ""}
               onChange={handleChange}
            />
            <br/><label>Staffid:</label>
            <input
               type="number"
               name="staffId"
               value={Campuslife.staffId || ""}
               onChange={handleChange}
            />
             <br/><label>Video:</label>
            <input
               type="text"
               name="video"
               value={Campuslife.video || ""}
               onChange={handleChange}
            />
            <br/>
            <input type="submit"/>
            </form>
    );
}
export default Campuslifeup;