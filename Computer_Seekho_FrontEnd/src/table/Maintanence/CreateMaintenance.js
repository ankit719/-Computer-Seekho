import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateMaintenance(){
    const [maintenance,setMaintenance]=useState({});
    let navigate=useNavigate();
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setMaintenance(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(maintenance);

        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/maintenance",
        {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:demo
        })
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>maintenance_id:</label>
            <input
               type="number"
               name="maintenance_id"
               disabled = "true"
               onChange={handleChange}
            />
            <br/>
            <label>staff_id:</label>
            <input
               type="number"
               name="staff_id"
               onChange={handleChange}
            />
            <br/><label>changing_date:</label>
            <input
               type="date"
               name="changing_date"
               onChange={handleChange}
            />
            {/* <br/><label>note:</label>
            <input
               type="text"
               name="note"
               onChange={handleChange}
            /> */}
            {/* <br/><label>reason:</label>
            <input
               type="text"
               name="reason"
               onChange={handleChange}
            /> */}
            <br/><label>record_id:</label>
            <input
               type="number"
               name="record_id"
               onChange={handleChange}
            />
            <br/><label>table_name:</label>
            <input
               type="text"
               name="table_name"
               onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    )
}